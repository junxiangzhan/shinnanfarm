import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import routes from './routes';
import App from './app';

Promise.all( matchRoutes( routes ).map( function ({ params, route: { element: { type }}}) {
    return type?.getInitialData && type?.getInitialData( params );
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