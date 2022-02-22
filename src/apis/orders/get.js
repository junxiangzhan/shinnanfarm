export default function get ( req, res, conn ) {
    const { name: token } = req.params;

    const queryString = `SELECT \`orders\`.\`token\`, \`orders\`.\`status\`, \`orders\`.\`details\`, \`products\`.\`name\`, \`products\`.\`price\`, \`order_content\`.\`amount\`, \`users\`.\`account\` FROM \`orders\` JOIN \`users\` ON \`orders\`.\`user_id\` = \`users\`.\`id\` JOIN \`order_content\` ON \`orders\`.\`id\` = \`order_content\`.\`order_id\` JOIN \`products\` ON \`order_content\`.\`product_id\` = \`products\`.\`id\`${ token ? " WHERE `token` = ?": ""}`;

    return conn.query( queryString, [ token ], function ( err, results ) {

        if ( err ) return res.send({
            type: 'error',
            reason: err
        });

        if ( !results.length ) return res.send({
            type: 'error',
            message: `The order, token: '${ token }', was not found.`
        });

        return res.send( results.length == 1 ? results[0]: results );
    });
}