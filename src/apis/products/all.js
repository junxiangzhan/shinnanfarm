export default function all ( req, res, conn ) {

    const { includeAll } = req.body ?? {};

    const queryString = `SELECT \`products\`.\`name\`, \`products\`.\`price\`, \`products\`.\`stock\`, \`product_details\`.\`value\` AS \`images\` FROM \`products\` LEFT OUTER JOIN \`product_details\` ON \`products\`.\`id\` = \`product_details\`.\`product_id\` WHERE ( \`product_details\`.\`name\` = "IMG" OR \`product_details\`.\`name\` IS NULL )${ includeAll? '': ' AND `products`.`released`' } ORDER BY \`products\`.\`id\`;`;
    
    conn.query( queryString, [], function ( err, results ) {
        if ( err ) return res.send({
            type: 'error',
            reason: err
        });
        
        return res.send( results.map( function ({ images, ...values }) {
            return { ...values, images: JSON.parse( images ) };
        }));
    });
}