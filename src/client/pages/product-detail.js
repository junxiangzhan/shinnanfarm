import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import store from "../store";

export default function GoodDetail () {
    const { id } = useParams();
    const [ data, setData ] = useState( store.productDetail );

    useEffect( function componentDidUpdate() {
        store.request( 'productDetail', '', id ).then( setData );
    }, [])

    return <div id="good_detail">
        <div className="reserve"></div>
        { JSON.stringify( data ) }
    </div>;
}

GoodDetail.getInitialData = async function ({ id }) {
    return store.request( 'productDetail', id );
}