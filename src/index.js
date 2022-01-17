import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

const app = express();

app.use( express.static( path.join( __dirname, '../public')));

app.get( '*', function ( req, res ) {
    return fs.readFile( path.join( __dirname, '../build/index.html' ), function ( err, data ) {
        if ( err ) throw err;

        const content = data.toString();
        const replacement = {
            content: ReactDOMServer.renderToString(
                <div>
                    <StaticRouter location={ req.path }>
                        Hello, World
                    </StaticRouter>
                </div>
            )
        };

        return res.end( Object.entries( replacement ).reduce( function ( prev, { key, value }) {
            return prev.replaceAll( `{{ ${key} }}`, value );
        }, content ));
    });
});

const port = process.env.PORT ?? 5000;
app.listen( port, function () {
    console.log( `Your app is listening on port ${ process.env.port ?? port }.` );
    console.log(path.resolve( __dirname, 'public'))
    console.log(path.resolve( __dirname, 'build/index.html'))
});