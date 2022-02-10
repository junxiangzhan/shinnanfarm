<<<<<<< HEAD
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
            userName: results[0].account,
            password: results[0].password,
        }

        const token = userManager.setUser( user );

        return res.send( JSON.stringify( token ));
    });
=======
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
>>>>>>> f91d160c4a088b85f376de563e33c812b1ae2715
}