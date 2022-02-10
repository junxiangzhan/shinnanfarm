import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Breadcrumb from "../components/breadcrumb";
import Carousel from "../components/carousel";

import store from "../store";

export default function GoodDetailPage () {
    const { name } = useParams();
    const [ data, setData ] = useState( store.productDetail );

    useEffect( function componentDidUpdate() {
        if ( data?.name != name ) store.request( 'productDetail', name ).then( setData );
    }, []);

    return <div id="good-detail">
        <Breadcrumb>
            <Link to="/market">線上商店</Link>
            { name }
        </Breadcrumb>
        { data?.name == name ? <GoodDetail data={ data } />: "LOADING" }
        { JSON.stringify( data ) }
    </div>;
}

function GoodDetail ({ data }) {
    return  <div className="good-detail-row">
        { data?.images?.map ? <Carousel className="good-detail-images">
                { data.images.map( function ( name ) {
                    return <img src={ `/api/files/${ name }` } alt={ name } key={ name }/>;
                })}
        </Carousel>: <img className="good-detail-images" src="/api/files/default_product.svg" alt={ data.name }/>}
        <div className="good-detail-info">
            <h1 className="good-name">{ data.name }</h1>
            <div className="good-price">NT$ <span>{ data.price }</span></div>
        </div>
    </div>;
}

GoodDetailPage.getInitialData = async function ({ name }) {
    return store.request( 'productDetail', name );
}