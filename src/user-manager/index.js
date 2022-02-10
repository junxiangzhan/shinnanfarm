const userManager = {
    users: {},
    
    getUser ( token ) {
        const user = this.users[ token ] ?? null;
        this.clearExpiredUsers();
        if ( user?.expriedTime < Date.now() ) return null;
        return user;
    },

    setUser ( user ) {
        const dateTime = Date.now();
        const token = Buffer.concat([ 
            toBuffer( dateTime ),
            new Buffer( generateToken( user ))
        ]).toString( 'base64url' );
        
        this.users[ token ] = Object.assign( {}, user, {
            expriedTime: Date.now() + 7 * 24 * 36e5
        });
        
        return token;
    },

    removeUser ( token ) {
        return this.users[ token ] ? delete this.users[ token ]: false;
    },

    clearExpiredUsers () {
        const { users } = this;
        return new Promise( function ( resolve ) {
            const now = Date.now();
            Object.entries( users ).forEach( function ([ token, user ]) {
                if ( user.expriedTime < now ) delete users[ token ];
            });

            return resolve();
        });
    }
}

function generateToken ({ userName, password }) {
    console.log( userName, password )
    const charsetList = [ ...userName, ...password ];
    const tokenList = [];
    for ( let i in charsetList.slice( 0, 10 )) {
        const index = Math.floor( charsetList.length * Math.random() );
        tokenList.push( charsetList[ index ]);
        charsetList.splice( index, 1 );
    }

    return tokenList.join('');
}

function toBuffer ( number ) {
    const buffer = Buffer.alloc( Math.floor( Math.log2( number ) / 8) + 1 );
    for ( let [ int, index ] = [ Math.floor( number ), 0 ]; int != 0; [ int, index ] = [ Math.floor( int / 256 ), index + 1 ]) buffer.writeUInt8( int % 256, index );
    return buffer;
}

export default userManager;