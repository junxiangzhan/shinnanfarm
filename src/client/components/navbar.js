import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useService } from "../service";

export default function Navbar () {

    const [ isCollapse, setCollapse ] = useState( true );
    const [ navbarCollapse, setNavbarCollapse ] = useState( null );
    const service = useService();

    const togglerProps = {
        className: [ 'navbar-toggler', !isCollapse && 'active' ].filter( Boolean ).join(" "),
        role: 'button',
        'aria-label': 'navbar toggler',
        onClick: toggleNavbar
    };

    const collapseProps = {
        className: [ 'navbar-collapse', isCollapse && 'collapsed' ].filter( Boolean ).join(" "),
        style: isCollapse ? null : {
            height: navbarCollapse?.children[0].getBoundingClientRect().height
        },
        ref: setNavbarCollapse
    };
    
    function toggleNavbar () {
        setCollapse( !isCollapse );
    }

    const [ user, setUser ] = useState( service.getUser());

    useEffect( function () {
        const listener = service.addListener( 'user', function () {
            setUser( service.getUser());
        });
        
        return function () {
            service.removeListener( 'user', listener );
        };
    }, []);

    return <nav id="navbar" role="navigation">
        <div className="navbar-container">
            <Link to="/" className="navbar-brand"><img src="/images/brand.svg" alt="新南智慧農園" /></Link>
            <button { ...togglerProps }><span className="navbar-toggler-icon"></span></button>
            <div { ...collapseProps }>
                <div className="navbar-collapse-wrapper">
                    <div className="navbar-nav">
                        <div className="nav-item"><Link to="/" className="nav-link">首頁</Link></div>
                        <div className="nav-item"><Link to="/news" className="nav-link">最新消息</Link></div>
                        <div className="nav-item"><Link to="/market" className="nav-link">線上商店</Link></div>
                        <div className="nav-item"><Link to="/account" className="nav-link nav-option"><i className="icon">{ '\uE77B' }</i> { user ? '會員中心': '登入 / 註冊'}</Link></div>
                        <div className="nav-item"><Link to="/cart" className="nav-link nav-option"><i className="icon">{ '\uF342' }</i> 我的商品</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>;
}