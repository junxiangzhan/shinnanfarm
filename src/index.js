import express from "express";
import path from "path";

const app = express();

app.use( express.static( path.join( __dirname, 'public' )));

app.get( '/', function ( req, res ) {
    res.send('hello, world');
    res.end();
});

app.listen( process.env.port ?? 3000, function () {
    console.log( `Your app is listening on port ${ process.env.port ?? 3000 }.`, __dirname );
});