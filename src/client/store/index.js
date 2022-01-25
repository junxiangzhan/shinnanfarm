import axios from "axios";

const store = (function () {
    const configs = {
        productList: {
            url: 'api/product/all',
            method: 'get'
        },

        productDetail ( id ) {
            return {
                url: `api/product/detail?id=${ id }`,
                method: 'get'
            };
        }
    };

    const store = {
        async request ( name, ...arg ) {
            const config = configs[ name ] instanceof Function ? configs[ name ]( ...arg ): configs[ name ];
            return await axios.request( config ).then( function ( response ) {
                return Object.assign( store[ name ], response.data );
            }.bind( this ));
        },

        init () {
            return Object.entries( configs ).map( function ([ name ]) {
                return store[ name ] = {};
            });
        },

        ... {
            productList: [],
            productDetail: {}
        }
    };
    
    store.init();

    return store;
})();

export default store;