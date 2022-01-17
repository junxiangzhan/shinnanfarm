import express from "express";

const app = express();

app.get( '*', function ( req, res ) {
    res.send('hello, world');
    res.end();
});

app.listen( process.env.port ?? 3000, function () {
    console.log( `Your app is listening on port ${ process.env.port ?? 3000 }.` );
});