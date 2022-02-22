import add from "./add";
import alter from "./alter";
import get from "./get";
import remove from './remove';

export default function orders ( req, res, conn ) {

    res.set( 'content-type', 'application/json');
    
    const { method: requestMethod } = req;

    const methods = {
        GET: get,
        POST: add,
        PUT: alter,
        DELETE: remove
    };

    return ( methods[ requestMethod ] ?? function ( req, res ) {
        res.send( {
            type: 'error',
            message: `Undefined request method: '${ requestMethod }' was used.`
        });
    })( req, res, conn );
};