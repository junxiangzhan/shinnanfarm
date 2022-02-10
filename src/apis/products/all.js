<<<<<<< HEAD
export default function all ( req, res, conn ) {

    const { includeAll } = req.body ?? {};

    const queryString = `SELECT \`products\`.* , \`product_details\`.\`name\` AS \`detail\`, \`product_details\`.\`value\` FROM \`products\` LEFT OUTER JOIN \`product_details\` ON \`products\`.\`id\` = \`product_details\`.\`product_id\`${ includeAll ? '': ' WHERE `products`.`released`' } ORDER BY \`products\`.\`id\`;`;

    conn.query( queryString, [], function ( err, results ) {
        if ( err ) throw err;
        res.send( results.filter( function ( value ) {
            return !value.detail || value.detail == 'IMG';
        }).map( function ({ detail, value: images, ...values }) {
            return { ...values, images: JSON.parse( images ) };
        }));
    });
=======
export default function all ( req, res, conn ) {

    const { includeAll } = req.body ?? {};

    const queryString = `SELECT \`products\`.* , \`product_details\`.\`name\` AS \`detail\`, \`product_details\`.\`value\` FROM \`products\` LEFT OUTER JOIN \`product_details\` ON \`products\`.\`id\` = \`product_details\`.\`product_id\`${ includeAll ? '': ' WHERE `products`.`released`' } ORDER BY \`products\`.\`id\`;`;

    conn.query( queryString, [], function ( err, results ) {
        if ( err ) throw err;
        res.send( results.filter( function ( value ) {
            return !value.detail || value.detail == 'IMG';
        }).map( function ({ detail, value: images, ...values }) {
            return { ...values, images: JSON.parse( images ) };
        }));
    });
>>>>>>> f91d160c4a088b85f376de563e33c812b1ae2715
}