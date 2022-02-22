import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Remarkable } from "remarkable";

import Breadcrumb from "../components/breadcrumb";
import Carousel from "../components/carousel";
import { store, useService } from "../service";

export default function GoodDetailPage () {
    const { name } = useParams();
    const [ data, setData ] = useState( store[`product-${name}`] );

    useEffect( function componentDidUpdate() {
        if ( data?.name != name ) store.request( 'productDetail', `product-${name}`, name ).then( setData );
    }, []);

    console.log( data )

    return <div id="good-detail">
        <Breadcrumb>
            <Link to="/market">線上商店</Link>
            { name }
        </Breadcrumb>
        { data?.name == name ? <GoodDetail data={ data } />: "LOADING" }
    </div>;
}

function GoodDetail ({ data }) {

    const service = useService();
    const [ cart, setCart ] = useState( service.getCart());

    const [ numberInput, setNumberInputElement ] = useState( null );
    
    const [ cartCount, setCartCount ] = useState( cart[ data.name ]);
    let [ count, setCount ] = useState( cartCount ?? 1);

    useEffect( function () {

        const cartListener = service.addListener( 'cart', function () {
            const cart = service.getCart();
            setCart( cart );
            setCartCount( cart[ data.name ]);
        });

        return function () {
            service.removeListener( 'cart', cartListener );
        };
    }, []);

    useEffect( function () {
        if ( numberInput ) numberInput.value = cartCount ?? count;
    }, [ numberInput ]);

    useEffect( function () {
        service.cartSet( data.name, cartCount && count );
    }, [ count ]);

    function increase () {
        let change = ++count > data.stock ? data.stock: count
        setCount( change );
        numberInput.value = change;
    }

    function decrease () {
        let change = --count < 1 ? 1: count
        setCount( --count < 1 ? 1: count );
        numberInput.value = change;
    }

    function changeHandler () {
        let change = numberInput.value > 0 ? numberInput.value > data.stock ? data.stock : numberInput.value : 1;
        setCount( change );
        numberInput.value = change;
    }

    function cartToggler () {
        const count = numberInput.value;
        service.cartSet( data.name, cartCount ? 0: count );
    }

    const md = new Remarkable();

    return  <>
        <div className="good-detail-row">
            { data?.images?.map ? <Carousel className="good-detail-images fade">
                { data.images.map( function ( name ) {
                    return <img src={ `/api/files/${ name }` } alt={ name } key={ name }/>;
                })}
            </Carousel>: <img className="good-detail-images" src="/api/files/default_product.svg" alt={ data.name }/>}
            <div className="good-detail-info">
                <h1 className="good-name">{ data.name }</h1>
                <div className="good-price">NT$ <span>{ data.price }</span></div>
                <div className="good-info">{ data.information }</div>
                {
                data.stock ?
                    <div className="good-control">
                        <div className="good-count">
                            <button className="icon" aria-label="decrease" onClick={ decrease } disabled={ count == 1 }>&#xE949;</button>
                            <input onChange={ changeHandler } ref={ setNumberInputElement } type="number" max={ data.stock } min={ 1 } />
                            <button className="icon" aria-label="increase" onClick={ increase } disabled={ count == data.stock }>&#xE948;</button>
                        </div>
                        {
                            cartCount ?
                                <button className="good-cart-remove" onClick={ cartToggler }>移出購物車</button>
                            :
                                <button className="good-cart-add" onClick={ cartToggler }>加入購物車</button>
                        }
                    </div>
                : 
                    <div className="good-control">
                        <button className="good-cart-add" disabled>目前尚無庫存</button>
                    </div>
                }
            </div>
        </div>
        { Boolean( data.introduce ) && <div className="good-detail-intro" dangerouslySetInnerHTML={{ __html: md.render( data.introduce ) }}></div> }
    </>;
}

GoodDetailPage.getInitialData = async function ({ name }) {
    return store.request( 'productDetail', `product-${name}`, name );
}