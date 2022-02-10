export default function get ( req, res, conn ) {
    const { name } = req.params;

    if ( !name ) return res.send({
        type: 'error',
        message: 'The parameter \'name\' must be given.'
    });

    return conn.query('SELECT `files`.*, `file_data`.`data_id`, `file_data`.`data` FROM `files`, `file_data` WHERE `id` = `file_id` AND `name` = ?;', [ name ], function ( err, results ) {

        if ( err ) return res.send({
            type: 'error',
            reason: err
        });

        if ( !results.length ) return res.send({
            type: 'error',
            message: `The file:'${ name }' was not found.`
        });

        const { type } = results[0];

        res.set( 'content-type', type );

        res.send( Buffer.concat( results.map( function ({ data }) {
            return data;
        })));
    });
}