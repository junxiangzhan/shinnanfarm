export default function login ( req, res, conn ) {

    const queryString = "SELECT * FROM `users` WHERE `account` = ? AND `password` = ?";
    const { userName: account, password } = req.body ?? {};

    if ( !account || !password ) return res.send({
        type: 'error',
        message: 'Parameters named \'account\' and \'password\' must been given.',
    });

    return conn.query( queryString, [ account, password ], function ( err, results ) {
        if ( err ) return res.send({
            type: 'error',
            reason: err
        });

        return res.send( Boolean( results.length ) && `${ results[0].id }` );
    });
}