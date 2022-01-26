import express from "express";
import fileUpload from "express-fileupload";

import apis from "./apis";
import defaultRoute from "./default";

const app = express();

app.disable( 'x-powered-by' );

app.use( fileUpload())

app.use( function ( req, res, next ) {
    res.set( 'x-content-type-options', 'nosniff' );
    next();
});

app.use( express.static( 'public' ));

app.all([ 
    '/api',
    '/api/:api',
    '/api/:api/:method',
    '/api/*'
], apis );

app.get( '*', defaultRoute );

const port = process.env.PORT ?? 5000;
app.listen( port, function () {
    console.log( `Your app is listening on port ${ process.env.port ?? port }.` );
});