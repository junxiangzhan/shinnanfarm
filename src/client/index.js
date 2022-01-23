import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, matchRoutes } from "react-router-dom";

import routes from './routes';
import App from './app';

Promise.all( matchRoutes( routes, location.pathname ).map( function ({ params, route: { element }}) {
    return element?.type.getInitialData && element.type.getInitialData( params );
})).then( function () {
    ReactDOM.hydrate(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
        document.querySelector( '[data-reactroot]' )
    );
});