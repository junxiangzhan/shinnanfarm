import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import routes from './routes';
import App from './app';

Promise.all( routes.matchRoutes( location.pathname ).map( function ([{ component }, info ]) {
    return component.getInitialData && component.getInitialData( info );  
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