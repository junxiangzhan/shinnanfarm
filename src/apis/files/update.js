export default function update ( req, res, conn ) {
    const { file } = req.files ?? {};
    const { name } = req.params;

    const result = { name };

    return new Promise( function ( resolve, reject ) {
        return conn.query( 'SELECT * FROM `files` WHERE `name` = ?;', [ name ], function ( err, results ) {
            if ( err ) return reject([ 'reason', err ]);
            if ( !results.length ) return reject([ 'msg', {
                type: 'error',
                message: `The file:'${ name }' was not found.`
            }]);
            
            const { id: fileId, name: fileName, type, details } = results[0];

            const newName = req.body?.name;

            const result = Array(2);

            return Promise.allSettled( [
                new Promise( function ( resolve, reject ) {
                    return conn.query( 'UPDATE `files` SET `name`= ?,`type`= ?,`details`= ? WHERE `name` = ?;', [
                        newName ?? fileName,
                        file?.mimetype ?? type,
                        JSON.stringify( Object.assign( JSON.parse( details ), {
                            latestUpdateDateTime: new Date().toISOString()
                        })),
                        fileName
                    ], function ( err, result ) {
                        return err ? reject( err ): resolve();
                    });
                }).catch( function ( reason ) {
                    result[0] = reason
                }),

                file && new Promise( function ( resolve, reject ) {
                    const { data } = file;

                    const fragments = [];
        
                    for (let i = 0; i < data.length / 65535; i++ ) {
                        fragments.push( data.slice(i * 65535, (i + 1) * 65535) );
                    }
        
                    const results = [];

                    return conn.query( 'DELETE FROM `file_data` WHERE `file_id` = ?;', [ fileId ], function ( err ) {
                        return err ? reject( err ): Promise.allSettled( fragments.map( function ( fragment, index ) {

                            results[ index ] = null;
            
                            return new Promise( function ( resolve, reject ) {
                                return conn.query('INSERT INTO `file_data`(`file_id`, `data_id`, `data`) VALUES ( ?, ?, BINARY(?));', [
                                    fileId, index, fragment
                                ], function ( err, result ) {
            
                                    if ( err ) return reject( err );
                                    
                                    return resolve( result );
                                });
                            }).then( function ( result ) {
                                return results[ index ] = result;
                            }).catch( function ( reason ) {
                                return results[ index ] = reason;
                            });
            
                        })).then( function ( promises ) {
                            Promise.all( promises ).then( function () {
                                return resolve( results );
                            }).catch( function () {
                                return reject( results );
                            });
                        });;
                    });
                })
            ]).then( function ( promises ) {
                return Promise.all( promises ).then( resolve, function () {
                    return reject([ 'reason', result.filter( Boolean )])
                });
            });
        });
    }).then( function () {
        return res.send( Object.assign( result, { result: 'success' }));
    }).catch( function ([ key, value ]) {
        return res.send( Object.assign( result, { result: 'fail', [ key ]: value }));
    });
}