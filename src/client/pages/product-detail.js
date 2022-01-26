import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Breadcrumb from "../components/breadcrumb";

import store from "../store";

export default function GoodDetail () {
    const { id } = useParams();
    const [ data, setData ] = useState( store.productDetail );

    useEffect( function componentDidUpdate() {
        store.request( 'productDetail', id ).then( setData );
    }, [])

    return <div id="good_detail">
        <Breadcrumb>
            <Link to="/market">線上商店</Link>
            { data.name }
        </Breadcrumb>
        { JSON.stringify( data ) }
    </div>;
}

GoodDetail.getInitialData = async function ({ id }) {
    return store.request( 'productDetail', id );
}