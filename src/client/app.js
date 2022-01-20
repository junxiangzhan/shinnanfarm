import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import routes from "./routes";

export default class App extends React.Component {
    constructor ( props ) {
        super( props );
    }

    sendRequest ( config, callback, onerror ) {
        axios.request( config ).then( callback ).then( onerror );
    }

    render () {
        return <>
            <Navbar />
            { renderRoutes( routes ) }
        </>;
    }
}

function renderRoutes ( routes ) {
    return <Routes>
        { routes.map( function ({ component: Component, ...props }, index ) {
            return <Route key={ index } element={ <Component /> } { ...props } />
        })}
    </Routes>
}