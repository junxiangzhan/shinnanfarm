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
};