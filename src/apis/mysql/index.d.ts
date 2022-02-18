import _mysql from "mysql";

declare type ConnectionConfigs = {
    host: string,
    user: string,
    password: string,
    database: string
}

declare type QueryObject<queryString, values, callback> = {
    queryString: queryString;
    values: values;
    callback: callback
}

declare class Connection<T = ConnectionConfigs> {

    constructor ( configs: T );

    configs: T;

    query <T = string, R = any[], P = ( error: object | null , result: any, fields: any[]) => void>( queryString: T, values: any[], callback: P ): QueryObject<T, R, P>;
}

declare const mysql: {
    createConnection <T = ConnectionConfigs>( configs: T ): Connection<T>
}

export default mysql;