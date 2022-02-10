import React, { useEffect, useState } from "react";
import { Link, useLinkClickHandler, useLocation } from "react-router-dom";
import Carousel from "../components/carousel";

import store from "../store";

export default function ProductList ( props ) {
    return <div id="product-list">
        <div className="product-list-container">
            <ProductListComponent />
        </div>
    </div>
}

ProductList.getInitialData = async function () {
    return store.request( 'productList' );
}

function ProductListComponent ( props ) {
    const { page = 0, prePage = 20 } = props;

    const [ productList, setProductList ] = useState( store.productList );

    useEffect( function componentDidMount () {
        store.request( 'productList' ).then( setProductList );
    }, []);

    return productList?.slice ? productList.slice( page * prePage, ( page + 1 ) * prePage ).map( function ( product, index ) {
        return <Link className="product-card" key={ product.name } to={ product.name }>
            <img className="product-image" src={ `/api/files/${ product?.images?.[0] ?? "default_product.svg" }` } alt={ product.name } />
            <div className="product-name">{ product.name }</div>
            <div className="product-intro">
                <div className="product-price">{ product.price }</div>
                <div className="product-detail">
                    <div className="product-stock"><i className="icon">&#xEECB;</i> 庫存 { product.stock }</div>
                </div>
            </div>
        </Link>
    }): <div>
        Loading
    </div>;
}