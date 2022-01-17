import express from "express";
import path from "path";

const app = express();

app.use( express.static( '/public' ));

app.get( '/', function ( req, res ) {
    res.send('hello, world');
    res.end();
});

const port = process.env.PORT ?? 5000;
app.listen( port, function () {
    console.log( `Your app is listening on port ${ process.env.port ?? port }.` );
});