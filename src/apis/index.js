import mysql from "mysql";

import files from "./files";
import products from "./products";
import users from "./users";

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

const apiList = { files, products, users };

function apis ( req, res ) {
    const { params: { api } } = req;
    return ( apiList[ api ] ?? function ( req, res ) {
        res.send({
            type: 'error',
            message: `Unknown api: '${ api }' had been request.`
        })
    })( req, res, connection );
}

export default apis;

export const routes = [
    '/api',
    '/api/:api',
    '/api/:api/:name',
    '/api/*'
]