import mysql from "mysql";

import files from "./files";
import products from "./products";

const DBhost = process.env.DBHOST ?? 'localhost';
const DBaccount = process.env.DBACCOUNT ?? 'root';
const DBpassword = process.env.DBPASSWORD ?? '';
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

export default apis.bind( apis );