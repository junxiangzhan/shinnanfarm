import all from './all';
import details from './details';

export default function product ( req, res, conn ) {
    res.set( 'content-type', 'application/json');
    
    const { method: requestMethod, params: { name: fileName }} = req;

    const methods = {
        GET: details,
    }

    if ( !fileName ) return all( req, res, conn );
    return ( methods[ requestMethod ] ?? function ( req, res ) {
        res.send( {
            type: 'error',
            message: `Undefined request method: '${ requestMethod }' was used.`
        });
    })( req, res, conn );
};