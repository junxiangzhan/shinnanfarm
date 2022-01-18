import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/navbar";

export default class App extends React.Component {
    render () {
        return <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={ "HomePage"} />
                <Route path="/market" element={ "Market"} />
            </Routes>
        </>;
    }
}