import express from "express";
import fs from "fs";

import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

app.use( express.static( '/public' ));

app.get( '/', function ( req, res ) {
    return fs.readFile( '/build/index.html', function ( err, data ) {
        if ( err ) throw err;
        res.end( data.toString().replaceAll( '{{ content }}', renderToString( <div>Hello, World</div>)))
    });
});

const port = process.env.PORT ?? 5000;
app.listen( port, function () {
    console.log( `Your app is listening on port ${ process.env.port ?? port }.` );
});