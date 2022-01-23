import React from "react";

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
            <div className="reserve"></div>
            { JSON.stringify( this.state.data ) }
        </div>
    }
}

Market.getInitialData = async function () {
    return store.request( 'productList' );
}