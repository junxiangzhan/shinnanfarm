import React, { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import routes from "./routes";
import { ServiceProvider } from "./service";

export default function App ( props ) {
    const location = useLocation();
    const service = props.cookies;

    useEffect( function () {
        service.checkUser();
    }, []);
    
    return <ServiceProvider cookies={ service }>
        <Navbar />
        <div className="content-body">{ useRoutes( routes, location ) }</div>
        <Footer />
    </ServiceProvider>;
}