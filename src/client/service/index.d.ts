import { AxiosResponse } from "axios";

declare type reactCookie = {};

declare type Cookies = {
    [ cookieName: string ]: any
};

declare type ServiceEventsType = "user" | "cart";

declare type ServiceEventsListenerFuntion = ( cookies: Cookies ) => void;

declare type ServiceEventsListener<T = ServiceEventsListenerFuntion, P = ServiceEventsListenerOptions> = {
    listener: T;
} | P;

declare type ServiceEventsListenerOptions = {
    once?: boolean
}

declare type Service = {

    /**
     * This method will return a \<Promise\> to wait for the server to log in.
     * 
     * If the login is successful, this \<Promise\> will resolve token and set the cookies to the token.
     * 
     * Otherwisr, it'll reject.
     */
    userLogin ( userName: string, password: string ): Promise<string> | Promise<never>;

    /**
     * This method will remove the cookie named 'userToken'.
     */
    userLogout (): void;

    /**
     * This method will return a \<Promise\> to wait for the server to sign up.
     */
    userRegister ( userName: string, password: string ): Promise<string> | Promise<never>;

    /**
     * This method will push or update the item into cookie named 'userCart' and return the new count of the product in the cart.
     * 
     * This method will automatically set the cookie named 'userCart' to \<Array\> if the cookie doesn't be setted.
     * 
     * @param count If the 'count' arguments is equal to 0, the product will be removed from the cart.
     */
    cartSet ( productName: string, count: number ): number;


    /**
     * This method will push or update the item into cookie named 'userCart' and return the new count of the product in the cart.
     * 
     * This method will automatically set the cookie named 'userCart' to \<Array\> if the cookie doesn't be setted.
     * 
     * @param count If the 'count' arguments is given as a function returning a number, the returned value will be the new count for the product in the cart.
     * 
     * If the 'count' arguments returns a value equal to 0, the product will be removed from the cart.
     */
    cartSet ( productName: string, count: ( currentCount: number ) => number ): number;

    /**
     * This method will remove the cookie named 'userCart'.
     */
    cartClear (): void;

    /**
     * This method will return the userToken on login, otherwise \<undefined\>.
     */
    getUser (): string | undefined;

    /**
     * This method will send a request to check if the token is vaild in the server and return \<Promise\> to wait for the result.
     * 
     * If still valid, \<Promise\> will resolve user data.
     * 
     * Otherwise, it'll resolve \<false\>.
     */
    checkUser (): Promise< Object | false >;

    /**
     * This method will return the cart whether any items in the cart or not.
     */
    getCart (): {
        [productName: string]: number;
    };

    /**
     * This method register the listener and return listener object.
     * 
     * If want to remove listener, the returned listener object should be used.
     * 
     * When event argument specified as "user", the method: \<userLogin\>, \<userLogout\>, \<userRegister\>, \<checkUser\> will trigger the listener.
     * 
     * When event argument specified as "cart", the method: \<cartSet\>, \<cartClear\> will trigger the listener.
     */
    addListener<T = ServiceEventsListenerFuntion, P = ServiceEventsListenerOptions>( event: ServiceEventsType, listenerFunction: T, options?: P ): ServiceEventsListener<T, P>;

    removeListener ( event: ServiceEventsType, listener: ServiceEventsListener ): void;
};

declare function cookieHandler ( cookie: reactCookie ): Service;

declare function useService (): Service;

declare const ServiceProvider: React.FunctionComponent<{
    cookies?: reactCookie
}>;

declare const store: {
    request ( name: string, key: any, ...value: any[] ): Promise<AxiosResponse<{}|[], {
        url: string;
        method: string;
        data?: {}
    }>>;
};

export { ServiceProvider, cookieHandler, useService, store };