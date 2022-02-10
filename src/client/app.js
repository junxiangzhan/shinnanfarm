import React from "react";
import { useLocation, useRoutes } from "react-router-dom";

import Navbar from "./components/navbar";
import Cookie from "./cookie";
import routes from "./routes";

export default function App ( props ) {
    const location = useLocation();
    const cookie = props.cookies;
    return <Cookie.Provider value={ cookie }>
        <Navbar />
        { useRoutes( routes, location.pathname ) }
    </Cookie.Provider>;
}