export default function list ( req, res, conn ) {

    const queryString = 'SELECT *, CONCAT(\'/api/files/\', `files`.`name`) AS `url` FROM `files`;';

    conn.query( queryString, [], function ( err, results ) {
        if ( err ) throw err;
        res.send( results );
    });
}