import userManager from '../../user-manager';

export default function register ( req, res, conn ) {

    const queryString = "INSERT INTO `users`(`account`, `password`) VALUES ( ?, ? )";
    
    const { userName, password } = req.body ?? {};

    if ( !userName || !password ) return res.send({
        type: 'error',
        message: 'Parameters named \'userName\' and \'password\' must been given.',
    });

    return conn.query( queryString, [ userName, password ], function ( err ) {
        if ( err ) return res.send({
            type: 'error',
            reason: err
        });

        const user = { userName, password };

        const token = userManager.setUser( user );

        return res.send( {
            userName,
            result: 'success',
            token
        });
    });
}