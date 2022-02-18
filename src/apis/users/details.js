import userManager from '../../user-manager';

const diction = {
    NAME: [ "name" ],
}

export default function details ( req, res, conn ) {
    const { token, detailed } = req.body ?? {};
    
    const { userName, authority } =  userManager.getUser( token ) ?? {};
            
    const user = { userName, authority };
    
    if ( !Boolean( userName )) return res.send( false );
    
    if ( !detailed ) return res.send( user );

    return Promise.all([ 
        new Promise ( function ( resolve, reject ) {
            return conn.query(
                "SELECT `user_details`.`name`, `user_details`.`value` FROM `users` JOIN `user_details` ON `users`.`id` = `user_details`.`user_id` WHERE `users`.`account` = ?",
                [ userName ],
                function ( error, results ) {
                    if ( error ) return reject( error );
    
                    results.forEach( function ({ name, value }, index ) {
                        const [ key, method ] = diction[ name ] ?? {};
                        return Object( user, {
                            [ key ?? name ]: method ? method( value ): value
                        });
                    });

                    return resolve( user );
                }
            );
        }),

        new Promise( function ( resolve, reject ) {
            return conn.query(
                "SELECT `orders`.`id`, `orders`.`details`, `products`.`name`, `products`.`price`, `product_details`.`value` AS `images`, `order_content`.`amount` FROM `orders` JOIN `users` ON `orders`.`user_id` = `users`.`id` JOIN `order_content` ON `orders`.`id` = `order_content`.`order_id` JOIN `products` ON `order_content`.`product_id` = `products`.`id` LEFT OUTER JOIN `product_details` ON `products`.`id` = `product_details`.`product_id` WHERE ( `product_details`.`name` = \"IMG\" OR `product_details`.`name` IS NULL ) AND `users`.`account` = ? ORDER BY `orders`.`id`, `products`.`id`",
                [ userName ],
                function ( error, results ) {
                    if ( error ) return reject( error );

                    user.orders = Object.values( results.reduce( function ( orders, { id, details, name, price, images, amount }) {
                        if ( !orders[id] ) orders[id] = { 
                            ...JSON.parse( details || {}),
                            items: []
                        };
                        
                        orders[id].items.push({ name, price, images: JSON.parse( images ), amount });
                        return orders;
                    }, {}));

                    return resolve( user );
                }
            );
        })
    ]).then( function () {
        return res.send( user );
    }).catch( function ( reason ) {
        return res.send( {
            type: 'error',
            reason
        });
    });
}

/**
 * SELECT `products`.`name`, `products`.`price`, `order_content`.`amount`, `product_details`.`value` AS `images` FROM `orders` JOIN `users` ON `orders`.`user_id` = `users`.`id` JOIN `order_content` ON `orders`.`id` = `order_content`.`order_id` JOIN `products` ON `order_content`.`product_id` = `products`.`id` LEFT OUTER JOIN `product_details` ON `products`.`id` = `product_details`.`product_id` WHERE `product_details`.`name` = "IMG" OR `product_details`.`name` IS NULL AND `users`.`id` = 1
 */