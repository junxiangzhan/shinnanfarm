import userManager from "../../user-manager";

export default function cookieHandler ( _cookie ) {

    const cookie = _cookie ?? {};
    return {
        getUser () {
            return cookie.userToken;
        },

        getCart () {
            return JSON.parse( cookie.userCart ?? "{}" );
        },

        checkUser () {
            const passed = userManager.getUser( cookie.userToken );
            return Promise[ passed ? 'resolve': 'reject']();
        }
    }
}