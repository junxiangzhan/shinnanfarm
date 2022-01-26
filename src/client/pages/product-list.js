import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import store from "../store";

export default function ProductList ( props ) {
    const [ productList, setProductList ] = useState( store.productList );

    console.log( productList );

    useEffect( function componentDidMount () {
        store.request( 'productList' ).then( setProductList );
    }, []);

    return <div id="product-list">
        <ul>
            { productList?.map && productList.map( function ( product, index ) {
                return <li key={ index }><Link to={ `/market/${index}` }>{ product.name }</Link></li>
            })}
        </ul>
    </div>
}

ProductList.getInitialData = async function () {
    return store.request( 'productList' );
}