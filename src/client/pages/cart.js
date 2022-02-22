import React, { useEffect, useState } from "react";
import { useService, store } from "../service";

// 購物車的頁面
export default function Cart () {

    const service = useService();

    // 使用 useState Hook 建立 cart、products State
    const [ cart, setCart ] = useState( service.getCart());
    const [ products, setProductList ] = useState( store.productList ?? [] );

    useEffect( function () {
        // 監聽購物車，若有任何變動，則更新 cart State 內容
        const listener = service.addListener( "cart", function () {
            return setCart( service.getCart() );
        });

        // 當組件將要卸載，註消監聽器
        return function () {
            return service.removeListener( "cart", listener );
        };
    }, []);

    // 若沒有取得商品清單，則嘗試取得，並將結果儲存至 products State
    useEffect( function () {
        if ( !products ) store.request( 'productList' ).then( setProductList );
    }, []);

    return <div id="cart-page">
        <div 
            className="navbar-space container"
            style={{ maxWidth: "var(--max-width-container-xl)"}}
        >
            { // 若購物車中有任何商品，則在商品清單載入後顯示頁面內容
                Object.entries( cart ).length ? 
                    products ?
                        <CartComponent cart={ cart } productList={ products } />
                    :
                        <Loading />
                : <CartEmpty />
            }
        </div>
    </div>;
}

Cart.getInitialData = function () {
    return store.request( 'productList' );
}

function CartComponent ( props ) {

    const { cart, productList } = props;

    const products = Object.fromEntries( productList.map( function ({ name, ...rest }) {
        return [ name, rest ];
    }));

    return  <div className="cart-layout">
        <CartList {...{ cart, products }}/>
        <CartSummary {...{ cart, products }}/>
    </div>;
}

function CartList ( props ) {

    const { cart, products } = props;

    function renderCartItems ( cart, products ) {
        return Boolean( products ) && Object.entries( cart ).sort().map( function ([ name, count ]) {
            const { price, images } = products[ name ] ?? {};
    
            return <div className="product-row" key={ name }>
                <img className="product-image" src={ `/api/files/${images?.[0] ?? "default_product.svg"}` }/>
                <div className="product-name">{ name }</div>
                <div className="product-price">{ price }</div>
                <div className="product-count">{ count }</div>
                <div className="product-price">{ count * price }</div>
            </div>;
        });
    }

    return <div className="cart-list">
        <div className="product-row product-title-row">
            <div>商品圖片</div>
            <div>商品名稱</div>
            <div>價格</div>
            <div>數量</div>
            <div>小計</div>
        </div>
        { renderCartItems( cart, products ) }
    </div>;
}

function Loading () {
    return "Loading...";
}

function CartSummary ( props ) {

    const { cart, products } = props;

    const [ selectElement, setSelectElement ] = useState( null );

    function count () {
        return Object.values( cart ).reduce( function ( prev, amount ) {
            return prev + amount;
        }, 0 );
    }

    function total () {
        return Object.entries( cart ).reduce( function ( prev, [ name, amount ]) {
            return prev + amount * products[ name ].price;
        }, 0 );
    }

    function orderTotal () {
        return total() + +(selectElement?.value ?? 50);
    }

    return <div className="cart-summary">
        <div className="summary-header">總計摘要</div>
        <div className="summary-body">
            <div className="summary-items-count summary-row">
                總數
                <span>{ count() }</span>
            </div>
            <div className="summary-items-total summary-row">
                總價
                <span>{ total() }</span>
            </div>
            <div className="summary-shipping-fees">
                運費
                <select defaultValue={ 50 } ref={ setSelectElement }>
                    <option value={ 50 }>標準運費 - NT$ 50.00</option>
                </select>
            </div>
            <div className="summary-order-total summary-row">
                合計
                <span>{ orderTotal() }</span>
            </div>
            <label className="summary-form">
                收件人
                <input type="text" name="name" placeholder="收件人姓名" title="請輸入收件人的姓名"/>
            </label>
            <label className="summary-form">
                聯絡電話
                <input type="text" name="tel" placeholder="手機或電話號碼" pattern="[0-9]" title="請輸入您的手機或電話號碼"/>
            </label>
            <label className="summary-form">
                送貨地址
                <input type="text" name="address" placeholder="僅限台灣、澎湖、金門以及馬祖地區" title="請輸入送貨的收件地址"/>
            </label>
            <div className="summary-text">
                ※匯款帳戶：[12346789]
            </div>
            <div className="summary-text">
                ※匯款時，請在備註欄填寫您的姓名、聯絡方式以及訂單摘要，以便於處理。
                訂單摘要將在送出訂單後生成。
            </div>
            <div className="summary-text">
                ※請於 3 日內完成匯款，否則將自動取消訂單。
                若有任何問題請聯絡客服人員，我們將為您服務。
            </div>
            <div className="summary-row">
                <button className="summary-clear">清空購物車</button>
                <button className="summary-checkout">送出訂單</button>
            </div>
        </div>
    </div>;
}

function CartEmpty ( props ) {
    return <div>
        購物車尚無任何商品哦!
    </div>
}