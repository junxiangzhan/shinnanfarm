import axios from "axios";

export default (function store () {
    const store = {};
    const configs = {
        userlist: {
            url: 'https://reqres.in/api/users?page=1',
            method: 'get'
        }
    };

    store.init = function () {
        return Object.entries( configs ).map( function ([ name ]) {
            return store[ name ] = {};
        });
    }.bind( store );

    store.request = async function ( name ) {
        return await axios.request( configs[ name ] ).then( function ( response ) {
            return Object.assign( store[ name ], response.data );
        }.bind( this ));
    }.bind( store );
    
    store.init();

    return store;
})()