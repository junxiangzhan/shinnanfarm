
type User = {
    userName: string;
    password: string;
    expireTime?: number;
}

declare const userManager: {
    getUser( token: string ): User | void;
    setUser( user: User ): string;
    removeUser( token: string ): boolean;
};

export default userManager;