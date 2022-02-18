import React, { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cookie from "./cookie";
import routes from "./routes";

export default function App ( props ) {
    const location = useLocation();
    const cookie = props.cookies;

    useEffect( function () {
        cookie.checkUser();
    }, [])

    return <Cookie.Provider value={ cookie }>
        <Navbar />
        <div className="content-body">{ useRoutes( routes, location.pathname ) }</div>
        <Footer />
    </Cookie.Provider>;
}