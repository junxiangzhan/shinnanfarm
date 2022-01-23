import React from "react";
import { matchRoutes, renderMatches, useLocation, useRoutes } from "react-router-dom";

import Navbar from "./components/navbar";
import routes from "./routes";

export default function App () {
    const location = useLocation();
    return <>
        <Navbar />
        { useRoutes( routes, location.pathname ) }
    </>;
}