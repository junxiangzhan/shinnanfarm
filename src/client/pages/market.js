import React from "react";

export default class Market extends React.Component {
    constructor ( props ) {
        super ( props );
        
        this.getInitialData = this.getInitialData.bind( this );
        this.componentDidMount = this.componentDidMount.bind( this );
    }

    componentDidMount () {
        
    }

    render () {
        return <div id="market">
            <div className="reserve"></div>
            Market
        </div>
    }
}

Market.getInitialData = async function getInitialData () {
    return await this.sendRequest( {
        url: 'https://reqres.in/api/users?page=2',
        method: 'get'
    }, function ( response ) {
        this.setState({
            goods: response.data
        });
    }.bind( this ), function ( error ) {
        throw error;
    });
}
