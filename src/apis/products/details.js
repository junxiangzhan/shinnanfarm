// 指定細項名稱與對應處理方法
const diction = {
    IMG: [ 'images', JSON.parse ],
    INFO: [ 'information' ],
    INTRO: [ 'introduce' ]
};

export default function detail ( req, res, conn ) {

    // 利用 JOIN 加入 [products]、[product_details] 共 2 張資料表
    // 使用 LEFT OUTER 關鍵字確保所有商品至少會有一項出現於查詢結果中，不論是否有任何的詳細資料
    const queryString = '\
    SELECT \
    `products`.*, `product_details`.`name` AS `detail_name`, `product_details`.`value` \
    FROM `products` \
    LEFT OUTER JOIN `product_details` ON `products`.`id` = `product_details`.`product_id` \
    WHERE `products`.`name` = ?;';

    const values = [ req.params.name ];

    conn.query( queryString, values, function ( err, results ) {
        // 若查詢有誤，則印出錯誤原因
        if ( err ) return res.send({
            type: 'error',
            reason: err
        });

        // 若無回傳資料，則印出查無商品
        if ( !results.length ) return res.send({
            type: 'error',
            message: `Not found product named: '${ req.params.name }'.`
        });

        // 由第一筆資料取得名稱、價格、庫存資訊
        const { name, price, stock } = results[0];

        // 利用 Array 物件的 reduce 方法將對應的細項加入物件，並打印之
        return res.send( results.reduce( function ( productDetail, { detail_name, value } ) {
            if ( value == null ) return productDetail;
            const [ key, method ] = diction[ detail_name ] ?? []
            // 利用 Object 物件的 assign 方法將對應的細項以指定的方法處理後，以對應的細項名稱加入物件
            return Object.assign( productDetail, {
                [ key ?? detail_name ]: method ? method( value ): value
            });
        }, { name, price, stock }));
    });
}