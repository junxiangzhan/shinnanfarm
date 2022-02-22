import axios from 'axios';
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { matchRoutes } from 'react-router-dom';
import { StaticRouter } from "react-router-dom/server";

import App from "./client/app";
import routes from "./client/routes";
import cookieHandler from "./client/service/server";

axios.defaults.baseURL = process.env.HOST ?? 'http://localhost:5000';

export function getInitialData ( req, res, next ) {
    const tasks = matchRoutes( routes, { pathname: req.path } ).map( function ({ params, route: { element }}) {
        return element?.type.getInitialData && element.type.getInitialData( params );
    });

    res.set( 'content-type', 'text/html;charset=utf-8');

    return Promise.all( tasks ).then( function () {
        return next();
    });
}

export function defaultRequestHandler ( req, res ) {
    return fs.readFile( path.resolve( __dirname, 'index.html' ), function ( err, data ) {
        if ( err ) throw err;

        const content = data.toString();
        const replacement = {
            PUBLIC_URL: path.relative( req.path, "/" ) || '.',
            CONTENT: ReactDOMServer.renderToString(
                <div>
                    <React.StrictMode>
                        <StaticRouter location={ req.path }>
                            <App cookies={ cookieHandler( req.cookies )} />
                        </StaticRouter>
                    </React.StrictMode>
                </div>
            )
        };

        return res.end( Object.entries( replacement ).reduce( function ( content, [ replaceKey, replaceValue ]) {
            return content.replaceAll( `%${ replaceKey }%`, replaceValue );
        }, content ));
    });
}