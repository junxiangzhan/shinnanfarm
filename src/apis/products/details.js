export default function all ({ query: { name }}, res ) {

    if ( !name ) return [ null, null, () => res.send({
        type: 'error',
        message: 'When using method \'details\', parameter \'name\' must be given.'
    })];

    const queryString = 'SELECT * FROM `products` WHERE `products`.`name` = ?;';
    const values = [ name ];
    const callback = function callback ( err, results, fields ) {
        if ( err ) throw err;
        res.send( results );
    };

    return [ queryString, values, callback ];
}