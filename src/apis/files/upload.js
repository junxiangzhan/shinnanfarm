<<<<<<< HEAD
export default function upload ( req, res, conn ) {
    const { file } = req.files ?? {};
    const { name } = req.params;

    if ( !file ) return res.send({
        type: 'error',
        message: 'There aren\'t any files need to be uploaded, request with files by naming \'file\'.'
    });

    const { mimetype, data } = file;
    const result = { name, mimetype };

    return new Promise( function ( resolve, reject ) {

        return conn.query('INSERT INTO `files`(`name`, `type`, `details`) VALUES ( ?, ?, ? )', [
            name, mimetype, JSON.stringify({
                uploadDateTime: new Date().toISOString()
            })
        ], function ( err, result ) {
            
            if ( err ) return reject( err );

            const { insertId: fileId } = result;

            const fragments = [];

            for (let i = 0; i < data.length / 65535; i++ ) {
                fragments.push( data.slice(i * 65535, (i + 1) * 65535) );
            }

            const results = [];

            return Promise.allSettled( fragments.map( function ( fragment, index ) {

                results[ index ] = null;

                return new Promise( function ( resolve, reject ) {
                    return conn.query('INSERT INTO `file_data`(`file_id`, `data_id`, `data`) VALUES ( ?, ?, BINARY(?))', [
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
            });
        });

    }).then( function () {
        return res.send( Object.assign( result, { result: 'success' }));
    }).catch( function ( reason ) {
        return res.send( Object.assign( result, { result: 'fail', reason }));
    });
=======
export default function upload ( req, res, conn ) {
    const { file } = req.files ?? {};
    const { name } = req.params;

    if ( !file ) return res.send({
        type: 'error',
        message: 'There aren\'t any files need to be uploaded, request with files by naming \'file\'.'
    });

    const { mimetype, data } = file;
    const result = { name, mimetype };

    return new Promise( function ( resolve, reject ) {

        return conn.query('INSERT INTO `files`(`name`, `type`, `details`) VALUES ( ?, ?, ? )', [
            name, mimetype, JSON.stringify({
                uploadDateTime: new Date().toISOString()
            })
        ], function ( err, result ) {
            
            if ( err ) return reject( err );

            const { insertId: fileId } = result;

            const fragments = [];

            for (let i = 0; i < data.length / 65535; i++ ) {
                fragments.push( data.slice(i * 65535, (i + 1) * 65535) );
            }

            const results = [];

            return Promise.allSettled( fragments.map( function ( fragment, index ) {

                results[ index ] = null;

                return new Promise( function ( resolve, reject ) {
                    return conn.query('INSERT INTO `file_data`(`file_id`, `data_id`, `data`) VALUES ( ?, ?, BINARY(?))', [
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
            });
        });

    }).then( function () {
        return res.send( Object.assign( result, { result: 'success' }));
    }).catch( function ( reason ) {
        return res.send( Object.assign( result, { result: 'fail', reason }));
    });
>>>>>>> f91d160c4a088b85f376de563e33c812b1ae2715
}