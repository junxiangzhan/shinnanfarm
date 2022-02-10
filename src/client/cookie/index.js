import { createContext, useContext } from "react";

const Cookie = createContext();

function cookieHandler ( cookie ) {

    const listeners = {};

    function triggerEvent( ...events ) {
        for ( let event of events ) {
            
            const eventListeners = listeners[ event ];
            let tmp = true;

            for ( let { listener, once } of eventListeners ) {
                if ( once ) tmp = false;
                listener();
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
                fetch( "/api/users/login", {
                    method: "post",
                    body: reqBody
                }).then( function ( res ) {
                    return res.json().then( function ( token ) {
                        if ( token ) {
                            cookie.save( 'userToken', token, { path: '/' });
                            return resolve( token );
                        };
                        reject();
                    });
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

                fetch( "/api/users/register", {
                    method: "post",
                    body: reqBody
                }).then( function ( res ) {
                    return res.json().then( function ( result ) {
                        if ( result.token ) {
                            cookie.save( 'userToken', result.token, { path: '/' });
                            return resolve( result.token );
                        };
                        reject();
                    });
                });

            }).then( function ( token ) {
                triggerEvent( 'user' );
                return token;
            });
        },

        cartSet ( productId, count ) {
            const cart = cookie.load( "cart" );
            if ( !cart ) return cookie.save( "cart", { [productId]: count }, { path: "/" });
            if ( count ) return cart[ productId ] = count;
            delete cart[ productId ];
        },

        cartClear () {
            cookie.remove( "cart", { path: "/" })
        },

        getUser () {
            return cookie.load( "userToken" );
        },

        checkUser () {
            return new Promise( function ( resolve, reject ) {

                const reqBody = new FormData();
    
                reqBody.append( "token", cookie.load( "userToken" ));

                fetch( "/api/users/token", {
                    method: "post",
                    body: reqBody
                }).then( function ( res ) {
                    return res.json().then( function ( result ) {
                        return result ? resolve(): reject();
                    });
                });
            });
        },

        getCart () {
            return cookie.load( "cart" );
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
}

function useCookie () {
    return useContext( Cookie );
}

Cookie.cookieHandler = cookieHandler;
Cookie.useCookie = useCookie;

export default Cookie;
export { cookieHandler, useCookie };