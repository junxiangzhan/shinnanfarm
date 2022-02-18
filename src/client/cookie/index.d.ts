import React from "react";

declare type reactCookie = {};

declare type Cookies = {
    [ cookieName: string ]: any
};

declare type CookieServiceEventsType = "user" | "cart";

declare type CookieServiceEventsListenerFuntion = ( cookies: Cookies ) => void;

declare type CookieServiceEventsListener<T = CookieServiceEventsListenerFuntion, P = CookieServiceEventsListenerOptions> = {
    listener: T;
} | P;

declare type CookieServiceEventsListenerOptions = {
    once?: boolean
}

declare type CookieService = {

    /**
     * This function will return a \<Promise\> to wait for the server to log in.
     * 
     * If the login is successful, this \<Promise\> will resolve token and set the cookies to the token.
     * 
     * Otherwisr, it'll reject.
     */
    userLogin ( userName: string, password: string ): Promise<string> | Promise<never>;

    /**
     * This function will remove the cookie named 'userToken'.
     */
    userLogout (): void;

    /**
     * This function will return a \<Promise\> to wait for the server to sign up.
     */
    userRegister ( userName: string, password: string ): Promise<string> | Promise<never>;

    /**
     * This function will push or update the item into cookie named 'userCart' and return the new count of the product in the cart.
     * 
     * This function will automatically set the cookie named 'userCart' to \<Array\> if the cookie doesn't be setted.
     * 
     * @param count If the 'count' arguments is equal to 0, the product will be removed from the cart.
     */
    cartSet ( productName: string, count: number ): number;


    /**
     * This function will push or update the item into cookie named 'userCart' and return the new count of the product in the cart.
     * 
     * This function will automatically set the cookie named 'userCart' to \<Array\> if the cookie doesn't be setted.
     * 
     * @param count If the 'count' arguments is given as a function returning a number, the returned value will be the new count for the product in the cart.
     * 
     * If the 'count' arguments returns a value equal to 0, the product will be removed from the cart.
     */
    cartSet ( productName: string, count: ( currentCount: number ) => number ): number;

    /**
     * This function will remove the cookie named 'userCart'.
     */
    cartClear (): void;

    /**
     * This function will return the userToken on login, otherwise \<undefined\>.
     */
    getUser (): string | undefined;

    /**
     * This function will send a request to check if the token is vaild in the server and return \<Promise\> to wait for the result.
     * 
     * If still valid, \<Promise\> will resolve user data.
     * 
     * Otherwise, it'll resolve \<false\>.
     */
    checkUser (): Promise< Object | false >;

    /**
     * This function will return the cart whether any items in the cart or not.
     */
    getCart (): {
        [productName: string]: number;
    };

    /**
     * This function register the listener and return listener object.
     * 
     * If want to remove listener, the returned listener object should be used.
     * 
     * When event argument specified as "user", the functions: \<userLogin\>, \<userLogout\>, \<userRegister\> will trigger the listener.
     * 
     * When event argument specified as "cart", the functions: \<cartSet\>, \<cartClear\> will trigger the listener.
     */
    addListener<T = CookieServiceEventsListenerFuntion, P = CookieServiceEventsListenerOptions>( event: CookieServiceEventsType, listenerFunction: T, options?: P ): CookieServiceEventsListener<T, P>;

    removeListener ( event: CookieServiceEventsType, listener: CookieServiceEventsListener ): void;

    cookieHandler ( cookie: reactCookie ): CookieService;

    useCookie (): CookieService;
};

declare const Cookie: React.Context<CookieService>;

declare function cookieHandler ( cookie: reactCookie ): CookieService;

declare function useCookie (): CookieService;


export default Cookie;
export { cookieHandler, useCookie };