import React from "react";

import Navbar from "./components/navbar";
import routes from "./routes";

export default function App () {
    
    return <>
        <Navbar />
        <routes.renderRoutes />
    </>;
}