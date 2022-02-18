import login from './login';
import details from './details';
import register from './register';

export default function users ( req, res, conn ) {
    res.set( 'content-type', 'application/json');
    
    const { params: { name: method }} = req;

    const methods = {
        login,
        details,
        register
    };

    return ( methods[ method ] ?? function ( req, res ) {
        res.send( {
            type: 'error',
            message: `Undefined request method: '${ method }' was used.`
        });
    })( req, res, conn );
};