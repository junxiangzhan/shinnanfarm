import mysql from "./mysql";

import files from "./files";
import products from "./products";
import users from "./users";

const DBhost = process.env.DBHOST ?? 'http://203.68.249.7/shinnan/sql.php';
const DBaccount = process.env.DBACCOUNT ?? 'root';
const DBpassword = process.env.DBPASSWORD ?? '1qaz@WSX3edc';
const DBname = process.env.DBNAME ?? 'shinnanfarm';

const connection = mysql.createConnection( {
    host: DBhost,
    user: DBaccount,
    password: DBpassword,
    database: DBname
});

function apis ( req, res ) {
    const { params: { api } } = req;
    return ( this[ api ] ?? function ( req, res ) {
        res.send({
            type: 'error',
            message: `Unknown api: '${ api }' had been request.`
        })
    })( req, res, connection );
}

apis.files = files.bind( apis );
apis.products = products.bind( apis );
apis.users = users.bind( apis );
apis.orders = function ( req, res ) {
    res.send(
        [{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}]
    )
}.bind( apis );

export default apis.bind( apis );