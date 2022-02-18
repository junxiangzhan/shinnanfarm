import axios from "axios";

const types = {
    VAR_STRING: String,
    STRING: String,
    TINY: Number,
    SHORT: Number,
    LONG: Number,
    LONGLONG: Number,
    INT24: Number,
    DOUBLE: Number,
    DATETIME: Date,
    DATE: Date,
    TIMESTAMP: Date,
    BLOB: Buffer.from
}

class Connection {

    #connectConfigs;
    #afterFatalError = false;

    constructor ( configs ) {
        const defaultConfigs =  {
            connectTimeout: 1e4
        }

        this.#connectConfigs = Object.assign( defaultConfigs, configs );

        this.query = this.query.bind( this );
    }

    get configs () {
        return this.#connectConfigs;
    }

    query ( queryString, values, callback ) {

        const { configs: { host, ...connectionConfigs }} = this;

        const queryObject = {
            queryString,
            values,
            callback
        };
        
        function OnFatalErrorHappen () {
            this.#afterFatalError = true;
        }

        const promise = new Promise( function ( resolve, reject ) {

            const request = axios.request({
                url: host,
                method: "post",
                data: {
                    connection: JSON.stringify( connectionConfigs ),
                    query: JSON.stringify({ queryString, values })
                }
            }).then( function ({ data: result }) {
                return result.error ? reject( result ): resolve( result );
            }).catch( function ( reason ) {
                return console.log( reason );
            });

        }).then( function ( result ) {

            const { results: datarows, fields } = result;
            const results = [];
            
            for ( let row of datarows ) {
                const result = {};

                for ( let field of fields )  {        
                    const { name, native_type } = field;
                    result[ name ] = types[ native_type ]( row[ name ]);
                }

                results.push( result );
            }

            if ( callback instanceof Function ) callback( null, results, fields );
            return result;

        }).catch( function ( result ) {
            const { error } = result;
            if ( callback instanceof Function ) callback( error );
            if ( error?.isFatal ) OnFatalErrorHappen();
        });

        return queryObject;
    }
}

const mysql = {
    createConnection ( configs ) {
        return new Connection( configs );
    }
}

export default mysql;