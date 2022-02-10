<<<<<<< HEAD
export default function list ( req, res, conn ) {

    const queryString = 'SELECT *, CONCAT(\'/api/files/\', `files`.`name`) AS `url` FROM `files`;';

    conn.query( queryString, [], function ( err, results ) {
        if ( err ) throw err;
        res.send( results );
    });
=======
export default function list ( req, res, conn ) {

    const queryString = 'SELECT *, CONCAT(\'/api/files/\', `files`.`name`) AS `url` FROM `files`;';

    conn.query( queryString, [], function ( err, results ) {
        if ( err ) throw err;
        res.send( results );
    });
>>>>>>> f91d160c4a088b85f376de563e33c812b1ae2715
}