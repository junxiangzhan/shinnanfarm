import all from './all';
import details from './details';

export default function product ( req, res, conn ) {
    const { params: { method }, query } = req;
    res.set( 'content-type', 'application/json; charset=utf-8' );

    const [ sqlString, values, callback ] = ({
        all, details
    }[ method ] ?? (() => []))( query, res );
    
    if ( !sqlString ) return res.send({
        type: 'error',
        message: `Unknown method: '${ method }' had been request.`
    });
    
    conn.query( sqlString, values ?? [], callback ?? function defaultCallback ( err, results, fields ) {
        if ( err ) throw err;
        res.send( results );
    });
};