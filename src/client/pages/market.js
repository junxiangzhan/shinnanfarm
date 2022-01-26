import React from "react";
import { Outlet } from "react-router-dom";

import Searchbar from "../components/searchbar";

import store from "../store";

export default class Market extends React.Component {
    constructor ( props ) {
        super ( props );
        
        this.state = {
            data: store.productList
        };

        this.componentDidMount = this.componentDidMount.bind( this );
    }

    componentDidMount () {
        store.request( 'productList' ).then( function () {
            this.setState( {
                data: store.productList
            });
        }.bind( this ));
    }

    render () {
        return <div id="market">
            <div className="navbar-space container" style={{ maxWidth: 'var(--max-width-container-lg)' }}>
                <Searchbar />
                <Outlet />
            </div>
        </div>
    }
}
