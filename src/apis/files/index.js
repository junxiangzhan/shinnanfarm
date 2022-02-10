<<<<<<< HEAD
import list from './list';
import get from './get';
import upload from './upload';
import update from './update';
import _delete from './delete';

export default function files ( req, res, conn ) {

    res.set( 'content-type', 'application/json');
    
    const { method: requestMethod, params: { name: fileName }} = req;

    const methods = {
        GET: get,
        POST: upload,
        PUT: update,
        DELETE: _delete
    };

    if ( !fileName ) return list( req, res, conn );
    return ( methods[ requestMethod ] ?? function ( req, res ) {
        res.send( {
            type: 'error',
            message: `Undefined request method: '${ requestMethod }' was used.`
        });
    })( req, res, conn );
=======
import list from './list';
import get from './get';
import upload from './upload';
import update from './update';
import _delete from './delete';

export default function files ( req, res, conn ) {

    res.set( 'content-type', 'application/json');
    
    const { method: requestMethod, params: { name: fileName }} = req;

    const methods = {
        GET: get,
        POST: upload,
        PUT: update,
        DELETE: _delete
    };

    if ( !fileName ) return list( req, res, conn );
    return ( methods[ requestMethod ] ?? function ( req, res ) {
        res.send( {
            type: 'error',
            message: `Undefined request method: '${ requestMethod }' was used.`
        });
    })( req, res, conn );
>>>>>>> f91d160c4a088b85f376de563e33c812b1ae2715
};