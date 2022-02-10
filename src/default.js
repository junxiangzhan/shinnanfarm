import axios from 'axios';
import fs from "fs";
import path from "path";

import React, { createContext } from "react";
import ReactDOMServer from "react-dom/server";
import { matchRoutes } from 'react-router-dom';
import { StaticRouter } from "react-router-dom/server";

import App from "./client/app";
import routes from "./client/routes";
import cookieHandler from "./client/cookie/server";

axios.defaults.baseURL = process.env.HOST ?? 'http://localhost:5000';

export default function ( req, res ) {

    return fs.readFile( path.resolve( __dirname, 'index.html' ), function ( err, data ) {
        if ( err ) throw err;

        res.set( 'content-type', 'text/html;charset=utf-8');

        return Promise.all( matchRoutes( routes, req.path ).map( function ({ params, route: { element }}) {
            return element?.type.getInitialData && element.type.getInitialData( params );
        })).then( function () {
            const content = data.toString();
            const replacement = {
                base: path.relative( req.path, "/" ) || '.',
                content: ReactDOMServer.renderToString(
                    <div>
                        <StaticRouter location={ req.path }>
                            <App cookies={ cookieHandler( req.cookies )} />
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