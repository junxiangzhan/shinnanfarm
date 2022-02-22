export default function alter ( req, res, conn ) {
    const { name: token } = req.params;
    
    if ( !token ) return res.send({
        type: 'error',
        message: 'The parameter \'token\' must be given.'
    });

    return new Promise( function ( resolve, reject ) {

        const queryString = 'SELECT `id`, `details` FROM `orders` WHERE `token` = ?'
        
        return conn.query( queryString, [ token ], function ( err, result ) {
            if ( err ) return reject( err );

            if ( !results.length ) return reject( {
                type: 'error',
                message: `The order, token: '${ token }', was not found.`
            });

            const { id: orderId, details } = result[0];
            const update = req.body;

            const results = [];

            return Promise.allSettled( [
                (update.details || update.status) && new Promise ( function ( resolve, reject ) {
                    const queryString = `UPDATE \`orders\` SET ${ [ update.details && "`details` = ?", update.status && "`status` = ?" ].filter( Boolean ).join(", ") } WHERE \`id\` = ?`;

                    return conn.query( queryString, [ update.details, update.status, orderId ].filter( Boolean ), function ( err, result ) {
                        return err ? reject(): resolve()
                    });
                }),

                update.content  && new Promise( function ( resolve ) {
                    const queryString = `DELETE FROM \`order_content\` WHERE \`id\` = ?`;

                    return conn.query( queryString, [ orderId ].filter( Boolean ), function ( err, result ) {
                        return err ? reject(): resolve()
                    });
                }).then( function () {
                    const queryString = "SELECT `id` FROM `products` WHERE `name` = ?";
                    
                    return Promise.allSettled( Object.entries( update.content ).map( function () {

                        results[ index ] = null;

                        return new Promise( function ( resolve, reject ) {
                            return new Promise( function ( resolve, reject ) {
                                return conn.query(
                                    queryString, [ productName ],
                                    function ( err, results ) {
                                        if ( err ) return reject( err );
                                        if ( !results.length ) return reject( "Not Found");
                                        return resolve( results[0].id );
                                    }
                                );
                            }).then( function ( productId ) {
                                // 將商品及訂購數量加入訂單
                                const queryString = "\
                                INSERT INTO \
                                `order_content`(`order_id`, `product_id`, `amount`) \
                                VALUES ( ?, ?, ? )";
                                const values = [ orderId, productId, amount ];
                                return conn.query( queryString, values, function ( err, result ) {

                                    if ( err ) return reject( err );

                                    return resolve( result );
                                });
                            }).catch( reject );
                        });
                    }));
                })
            ]).then( Promise.all ).then( resolve ).catch( reject );
        });

    }).then( function () {
        return res.send( {
            result: 'success'
        });
    }).catch( function ( reason ) {
        return res.send( {
            result: 'failed',
            reason
        })
    });
}