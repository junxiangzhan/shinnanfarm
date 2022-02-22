export default function remove ( req, res, conn ) {
    const { name: token } = req.params;

    if ( !token ) return res.send({
        type: 'error',
        message: 'The parameter \'token\' must be given.'
    });

    const queryString = 'DELETE FROM `orders` WHERE `token` = ?;';

    conn.query( queryString, [ token ], function ( err, result ) {
        res.send({
            token: token,
            results: 'failed',
            [ err ? 'reason': 'results' ]: err ?? 'success'
        });
    });
}