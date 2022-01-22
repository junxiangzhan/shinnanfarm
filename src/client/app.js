import React from "react";

import Navbar from "./components/navbar";
import routes from "./routes";

export default class App extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {};
    }

    render () {
        return <>
            <Navbar />
            <routes.renderRoutes />
        </>;
    }
}