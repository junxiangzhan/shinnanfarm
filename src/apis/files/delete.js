export default function _delete ( req, res, conn ) {
    const { name } = req.params;

    if ( !name ) return res.send({
        type: 'error',
        message: 'The parameter \'name\' must be given.'
    });

    const queryString = 'DELETE FROM `files` WHERE `name` = ?;';

    conn.query( queryString, [ name ], function ( err, result ) {
        res.send({
            name,
            results: 'failed',
            [ err ? 'reason': 'results' ]: err ?? 'success'
        });
    });
}