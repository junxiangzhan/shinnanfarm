export default function upload ( req, res ) {
    const { files: _files } = req.files;

    if ( !_files ) return [ null, null, ()=> res.send({
        type: 'error',
        message: 'There aren\'t any files need to be uploaded, request with files by naming \'files\'.'
    })];

    const files = [];
    if ( _files instanceof Array ) {
        files.push( ..._files );
    } else files.push( _files );

    return [ null, null, function ( conn ) {
        Promise.all( files.map( function ({ name, mimetype, data }) {

            const buffer = [];
            for (let i = 0; i < data.length / 63; i++ ) buffer.push( data );

            return new Promise( function ( resolve, reject ) {
                resolve( buffer );
            });
        })).then( res.send );
    }];
}