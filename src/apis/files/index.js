import list from './list';
import uploadform from './uploadForm';
import upload from './upload';

export default function files ( req, res, conn ) {
    const { params: { method }} = req;

    const [ sqlString, values, callback ] = ({
        list, uploadform, upload
    }[ method ] ?? (() => []))( req, res );
    
    if ( !sqlString ) return callback ? callback( conn ): res.send({
        type: 'error',
        message: `Unknown method: '${ method }' had been request.`
    });
    
    conn.query( sqlString, values ?? [], callback ?? function defaultCallback ( err, results, fields ) {
        if ( err ) throw err;
        res.send( results );
    });
};