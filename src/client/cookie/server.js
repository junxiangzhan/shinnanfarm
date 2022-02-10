import userManager from "../../user-manager";

export default function cookieHandler ( _cookie ) {

    const cookie = _cookie ?? {};

    return {
        getUser () {
            return cookie.userToken;
        },

        getCart () {
            return cookie.cart;
        },

        checkUser () {
            const passed = userManager.getUser( cookie.userToken );
            return Promise[ passed ? 'resolve': 'reject']();
        }
    }
}