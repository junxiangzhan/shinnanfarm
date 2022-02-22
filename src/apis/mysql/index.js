import axios from "axios";

const types = {
    [[ "VAR_STRING", "STRING" ]]: String,
    [[ "TINY", "SHORT", "LONG", "LONGLONG", "INT24", "DOUBLE" ]]: Number,
    [[ "DATETIME", "DATE", "TIMESTAMP" ]]: Date,
    [[ "BLOB" ]]: Buffer.from
};

const errorCodes = {

};

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
        
        const OnFatalErrorHappen = function () {
            this.#afterFatalError = true;
        }.bind( this );

        const promise = new Promise( function ( resolve, reject ) {

            const request = axios.request({
                url: host,
                method: "post",
                data: {
                    connection: JSON.stringify( connectionConfigs ),
                    query: JSON.stringify({ queryString, values })
                }
            }).then( function ({ data: result }) {
                return result.error ? reject( result.error ): resolve( result );
            }).catch( function ( reason ) {
                return reject( {
                    errorInfo: reason,
                    isFatal: true
                });
            });

        }).then( function ( result ) {

            const { results: datarows, fields } = result;
            const results = [];
            
            for ( let row of datarows || [] ) {
                const result = {};

                for ( let field of fields )  {        
                    const { name, native_type } = field;

                    for ( let [ nativeTypes, method ] of Object.entries( types )) {
                        if ( nativeTypes.includes( native_type ) ) {
                            result[ name ] = method( row[name] );
                            break;
                        }
                    }
                }

                results.push( result );
            }

            if ( callback instanceof Function ) callback( null, results, fields );
            return result;

        }).catch( function ( error ) {
            console.log(error)
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