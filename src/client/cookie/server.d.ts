export default function cookieHandler ( _cookie: object ): {
    getUser (): string;

    getCart (): {
        [productName: string]: number;
    };
    
    checkUser (): Promise<null> | Promise<never>;
}