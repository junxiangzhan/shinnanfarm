import userManager from '../../user-manager';

export default function add ( req, res, conn ) {

    const { shippingFees, name, tel, address, cart, token } = req?.body ?? {};
    
    // 取得使用者編號
    const { userId } =  userManager.getUser( token ) ?? {};

    // 將訂單及其資訊加入資料庫
    const queryString = '\
    INSERT INTO \
    `orders`(`user_id`, `token`, `status`, `details`) \
    VALUES ( ?, ?, ? );';
    const values = [ userId, toBuffer( Date.now()), 0, JSON.stringify({
        name, tel, address, shippingFees,
        orderDateTime: new Date().toISOString()
    })];

    conn.query( queryString, values, function ( err, result ) {
        if ( err ) return res.send({
            type: 'error',
            reason: err
        });

        // 取得訂單編號
        const { insertId: orderId } = result;
        const results = [];

        // 使用 Promise 物件的 allSettled 方法等待程序執行
        return Promise.allSettled(
            Object.entries( cart ).map( function ([ productName, amount ]) {

                results[ index ] = null;

                return new Promise( function ( resolve, reject ) {
                    // 取得商品編號
                    const queryString = "SELECT `id` FROM `products` WHERE `name` = ?";

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
                }).then( function ( result ) {
                    return results[ index ] = result;
                }).catch( function ( reason ) {
                    return results[ index ] = reason;
                });
            })
        ).then( function ( promises ) {

            return Promise.all( promises ).then( function () {
                return res.send( {
                    result: "success",
                })
            }).catch( function () {
                return res.send( {
                    result: "success",
                    problem: results
                });
            });
        });
    });
}

function toBuffer ( number ) {
    const buffer = Buffer.alloc( Math.floor( Math.log2( number ) / 8) + 1 );
    for ( let [ int, index ] = [ Math.floor( number ), 0 ]; int != 0; [ int, index ] = [ Math.floor( int / 256 ), index + 1 ]) buffer.writeUInt8( int % 256, index );
    return buffer;
}