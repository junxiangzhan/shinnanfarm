import axios from "axios";
import { createContext, useContext } from "react";

const Cookie = createContext();

function cookieHandler ( cookie ) {

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
                    console.log('hi')
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
}

function useCookie () {
    return useContext( Cookie );
}

Cookie.cookieHandler = cookieHandler;
Cookie.useCookie = useCookie;

export default Cookie;
export { cookieHandler, useCookie };