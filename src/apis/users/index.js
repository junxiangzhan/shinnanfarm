<<<<<<< HEAD
import login from './login';
import checkToken from './checkToken';
import register from './register';

export default function users ( req, res, conn ) {
    res.set( 'content-type', 'application/json');
    
    const { params: { name: method }} = req;

    const methods = {
        login,
        token: checkToken,
        register
    };

    return ( methods[ method ] ?? function ( req, res ) {
        res.send( {
            type: 'error',
            message: `Undefined request method: '${ method }' was used.`
        });
    })( req, res, conn );
=======
import login from './login';

export default function users ( req, res, conn ) {
    res.set( 'content-type', 'application/json');
    
    const { method: requestMethod, params: { name: method }} = req;

    const methods = {
        login
    };

    return ( methods[ method ] ?? function ( req, res ) {
        res.send( {
            type: 'error',
            message: `Undefined request method: '${ method }' was used.`
        });
    })( req, res, conn );
>>>>>>> f91d160c4a088b85f376de563e33c812b1ae2715
};