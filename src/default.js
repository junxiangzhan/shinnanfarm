import axios from 'axios';
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "./client/app";
import routes from "./client/routes";

axios.defaults.baseURL = 'http://localhost:5000';

export default function ( req, res ) {
    return fs.readFile( path.resolve( __dirname, 'index.html' ), function ( err, data ) {
        if ( err ) throw err;

        res.set( 'content-type', 'text/html;charset=utf-8');

        return Promise.all( routes.matchRoutes( req.path ).map( function ([{ component }, info ]) {
            return component.getInitialData && component.getInitialData( info );  
        })).then( function () {
            const content = data.toString();
            const replacement = {
                base: path.relative( req.path, "/" ) || '.',
                content: ReactDOMServer.renderToString(
                    <div>
                        <StaticRouter location={ req.path }>
                            <App />
                        </StaticRouter>
                    </div>
                )
            };

            return res.end( Object.entries( replacement ).reduce( function ( prev, [ key, value ]) {
                return prev.replaceAll( `{{ ${ key } }}`, value );
            }, content ));
        });
    });
}