import React from "react";

import Store from "../store";

export default class Market extends React.Component {
    constructor ( props ) {
        super ( props );
        
        this.state = {
            data: store.goodlists
        };

        this.componentDidMount = this.componentDidMount.bind( this );
    }

    componentDidMount () {
        store.request( 'goodlists' ).then( function () {
            this.setState( {
                data: store.goodlists
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
    return store.request( 'goodlists' );
}