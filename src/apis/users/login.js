import userManager from '../../user-manager';

export default function login ( req, res, conn ) {

    const queryString = "SELECT * FROM `users` WHERE `account` = ? AND `password` = ?";
    const { userName, password } = req.body ?? {};

    if ( !userName || !password ) return res.send({
        type: 'error',
        message: 'Parameters named \'account\' and \'password\' must been given.',
    });

    return conn.query( queryString, [ userName, password ], function ( err, results ) {
        if ( err ) return res.send({
            type: 'error',
            reason: err
        });
        
        if ( !results.length ) return res.send( false );

        const user = {
            userId: results[0].id,
            userName: results[0].account,
            password: results[0].password,
            authority: results[0].authority
        }

        const token = userManager.setUser( user );

        return res.send( JSON.stringify( token ));
    });
}