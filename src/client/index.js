import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, matchRoutes } from "react-router-dom";

import routes from './routes';
import App from './app';
import cookie from 'react-cookies';
import { cookieHandler } from './cookie';

Promise.all( matchRoutes( routes, location.pathname ).map( function ({ params, route: { element }}) {
    return element?.type.getInitialData && element.type.getInitialData( params );
})).then( function () {
    ReactDOM.hydrate(
        <React.StrictMode>
            <BrowserRouter>
                <App cookies={ cookieHandler( cookie )}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.querySelector( '[data-reactroot]' )
    );
});