import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Searchbar from "../components/searchbar";
import { store } from "../service";

export default function ProductList () {

    const [ productList, setProductList ] = useState( store.productList );

    useEffect( function componentDidMount () {
        if ( !productList ) store.request( 'productList' ).then( setProductList );
    }, []);

    return <div id="product-list">
        <Searchbar />
        <div className="product-list-container">
            { productList ? productList.type ? "ERROR": <ProductListComponent productList={ productList } />: <div>Loading...</div> }
        </div>
    </div>
}

ProductList.getInitialData = function () {
    return store.request( 'productList' );
}

function ProductListComponent ( props ) {
    const { page = 0, prePage = 20, productList } = props;

    return productList.slice( page * prePage, ( page + 1 ) * prePage ).map( function ( product, index ) {
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
    });
}