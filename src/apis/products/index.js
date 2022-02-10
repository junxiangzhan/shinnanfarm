<<<<<<< HEAD
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
=======
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
>>>>>>> f91d160c4a088b85f376de563e33c812b1ae2715
};