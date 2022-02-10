import axios from "axios";

const store = (function () {
    const configs = {
        productList: {
            url: 'api/products/',
            method: 'get'
        },

        productDetail ( name ) {
            return {
                url: encodeURI( `api/products/${ name }` ),
                method: 'get'
            };
        },
    };

    const store = {
        async request ( name, ...arg ) {
            const config = configs[ name ] instanceof Function ? configs[ name ]( ...arg ): configs[ name ];
            return await axios.request( config ).then( function ( response ) {
                Object.assign( store, { [name]: response.data } )
                return response.data;
            }.bind( this ));
        },

        init () {
            return Object.entries( configs ).map( function ([ name ]) {
                return store[ name ] = null;
            });
        }
    };
    
    store.init();

    return store;
})();

export default store;