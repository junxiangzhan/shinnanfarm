import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";

export default class App extends React.Component {
    render () {
        return <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={ <HomePage /> }/>
                <Route path="/market" element={ "Market" }/>
            </Routes>
        </>;
    }
}