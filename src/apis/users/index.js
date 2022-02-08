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
};