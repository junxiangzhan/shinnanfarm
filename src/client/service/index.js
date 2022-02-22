import React from "react";
import axios from "axios";

const ServiceContext = React.createContext( null );
ServiceContext.displayName = "Service";

export function useService () {
    return React.useContext( ServiceContext );
}

export function ServiceProvider ( props ) {
    const { cookies, children } = props;
    return <ServiceContext.Provider value={ cookies }>
        { children }
    </ServiceContext.Provider>
}

export function cookieHandler ( cookie ) {

    const listeners = {};

    function triggerEvent( ...events ) {
        const cookies = cookie.loadAll();

        for ( let event of events ) {
            
            const eventListeners = listeners[ event ] ?? [];
            let tmp = true;

            for ( let { listener, once } of eventListeners ) {
                if ( once ) tmp = false;
                listener( cookies );
            };

            if ( tmp ) return ;

            for ( let index = 0; index < eventListeners.length; index++ ) if ( eventListeners[ index ].once ) {
                eventListeners.splice( index, 1 );
                index--;
            }
        }
    }

    return {

        userLogin ( userName, password ) {

            const reqBody = new FormData();

            reqBody.append( "userName", userName );
            reqBody.append( "password", password );

            return new Promise( function ( resolve, reject ) {
                axios.request( {
                    url: "/api/users/login",
                    method: "post",
                    data: { userName, password }
                }).then( function ( res ) {
                    const token = res.data;
                    if ( token ) {
                        cookie.save( 'userToken', token, { path: '/' });
                        return resolve( token );
                    };
                    reject();
                });
            }).then( function ( token ) {
                triggerEvent( 'user' );
                return token;
            });
        },

        userLogout () {
            cookie.remove( "userToken", { path: "/" });
            triggerEvent( 'user' );
        },

        userRegister ( userName, password ) {

            const reqBody = new FormData();

            reqBody.append( "userName", userName );
            reqBody.append( "password", password );

            return new Promise( function ( resolve, reject ) {

                axios.request( {
                    url: "/api/users/register",
                    method: "post",
                    data: { userName, password }
                }).then( function ( res ) {
                    const { token } = res.data;
                    if ( token ) {
                        cookie.save( 'userToken', token, { path: '/' });
                        return resolve( token );
                    };

                    reject();
                });

            }).then( function ( token ) {
                triggerEvent( 'user' );
                return token;
            });
        },

        cartSet ( productName, _count ) {
            const cart = cookie.load( "userCart" ) ?? {};
            const count = _count instanceof Function? _count( cart[ productName ] ?? 0 ): +_count;

            cart[ productName ] = count;
            if ( !count ) delete cart[ productName ];

            cookie.save( "userCart", cart, { path: "/" });
            triggerEvent( 'cart' );
            return count;
        },

        cartClear () {
            cookie.remove( "userCart", { path: "/" });
            triggerEvent( 'cart' );
        },

        getUser () {
            return cookie.load( "userToken" );
        },

        checkUser () {
            return new Promise( function ( resolve ) {

                const token = cookie.load( "userToken" );

                if ( !token ) return resolve( false );

                axios.request( {
                    url: "/api/users/details",
                    method: "post",
                    data: { token }
                }).then( function ({ data: result }) {
                    if ( !result ) {
                        cookie.remove( "userToken", { path: "/" });
                        triggerEvent( 'user' );
                    }
                    return result;
                });
            });
        },

        getCart () {
            return cookie.load( "userCart" ) ?? {};
        },

        addListener ( event, listenerFunction, option ) {
            if ( !listeners[ event ] ) listeners[ event ] = [];

            const listener = Object.assign( {
                listener: listenerFunction,
                once: false
            }, option )

            listeners[ event ].push( listener );
            return listener;
        },

        removeListener ( event, listener ) {
            const eventListeners = listeners[ event ];
            for ( let index = 0; index < eventListeners.length; index++ ) if ( eventListeners[ index ] == listener ) {
                eventListeners.splice( index, 1 );
                index--;
            }
        }
    };
};

export const store = (function () {
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

        userDetail ( token ) {
            return {
                url: `api/users/details`,
                method: 'post',
                data: {
                    token, detailed: true
                }
            }
        }
    };

    const store = {
        async request ( name, key, ...arg ) {
            const config = configs[ name ] instanceof Function ? configs[ name ]( ...arg ): configs[ name ];
            return await axios.request( config ).then( function ( response ) {
                Object.assign( store, { [key || name]: response.data } );
                return response.data;
            }.bind( this ));
        }
    };

    return store;
})();