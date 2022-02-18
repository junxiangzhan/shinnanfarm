const diction = {
    IMG: [ 'images', JSON.parse ],
    INFO: [ 'information' ],
    INTRO: [ 'introduce' ]
};

export default function detail ( req, res, conn ) {

    const queryString = 'SELECT `products`.*, `product_details`.`name` AS `detail_name`, `product_details`.`value` FROM `products` LEFT OUTER JOIN `product_details` ON `products`.`id` = `product_details`.`product_id` WHERE `products`.`name` = ?;';
    const values = [ req.params.name ];

    conn.query( queryString, values, function ( err, results ) {
        if ( err ) return res.send({
            type: 'error',
            reason: err
        });

        if ( !results.length ) return res.send({
            type: 'error',
            message: `Not found product named: '${ req.params.name }'.`
        });

        const { name, price, stock } = results[0];

        return res.send( results.reduce( function ( productDetail, { detail_name, value } ) {
            if ( value == null ) return productDetail;
            const [ key, method ] = diction[ detail_name ] ?? []
            return Object.assign( productDetail, {
                [ key ?? detail_name ]: method ? method( value ): value
            });
        }, { name, price, stock }));
    });
}