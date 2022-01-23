const apis = function ( req, res ) {
    const { params: { method } } = req;
    this[ method ]( req, res );
}

apis.product = function ( req, res ) {

    const productList = [ {
        name: '哈密瓜禮盒',
        prise: 1299,
        images: [],
        isSoldOut: false
    }, {
        name: '小番茄 500g 盒裝',
        prise: 599,
        images: [],
        isSoldOut: true
    }]

    const detailList = [ {
        name: '哈密瓜禮盒',
        prise: 1299,
        images: [],
        intro: "哈密瓜禮盒的介紹",
        stock: 5
    }, {
        name: '小番茄 500g 盒裝',
        prise: 599,
        images: [],
        intro: "小番茄 500g 盒裝的介紹",
        stock: 0
    }]

    const { params, query } = req;
    switch ( params.arg ) {
        case 'all':
            return res.send( JSON.stringify( productList ));
        case 'detail':
            if ( query.id == null ) return res.send({
                type: 'error',
                code: '405',
                message: `The id argument must be given, but get ${ query.id }.`
            });

            return res.send( JSON.stringify( detailList[ query.id ] ?? {
                type: 'error',
                code: '404',
                message: `Product Id: ${ query.id }, has not found.`
            }));

        default:
            return res.send( JSON.stringify({
                type: 'error',
                code: '405',
                message: `The undefined method has been given.`
            }));
    }

}.bind( apis );

export default apis.bind( apis );