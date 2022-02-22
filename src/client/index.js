import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, matchRoutes } from "react-router-dom";

import axios from "axios";

import routes from './routes';
import App from './app';
import cookies from 'react-cookies';
import { cookieHandler } from './service';

axios.defaults.baseURL = location.origin;

Promise.all( matchRoutes( routes, location.pathname ).map( function ({ params, route: { element }}) {
    return element?.type.getInitialData && element.type.getInitialData( params );
})).then( function () {
    ReactDOM.hydrate(
        <React.StrictMode>
            <BrowserRouter>
                <App cookies={ cookieHandler( cookies ) }/>
            </BrowserRouter>
        </React.StrictMode>,
        document.querySelector( '[data-reactroot]' )
    );
});