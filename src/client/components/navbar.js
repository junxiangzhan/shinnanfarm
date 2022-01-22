import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    constructor ( props ) {
        super( props );

        this.state = {
            isCollapse: true
        };

        this.collapseProps = this.collapseProps.bind( this );
        this.togglerProps = this.togglerProps.bind( this );
        this.getCollaspe = this.getCollaspe.bind( this );

        this.toggleNavbar = this.toggleNavbar.bind( this );
        this.closeNavbar = this.closeNavbar.bind( this );
    }

    toggleNavbar () {
        this.setState({
            isCollapse: !this.state.isCollapse
        });
    }

    closeNavbar () {
        this.setState({
            isCollapse: true
        });
    }

    getCollaspe ( navbarCollapse ) {
        this.setState({ navbarCollapse });
    }

    collapseProps () {
        return {
            className: [ 'navbar-collapse', this.state.isCollapse && 'collapsed' ].filter( Boolean ).join(" "),
            style: this.state.isCollapse ? null : {
                height: this.state.navbarCollapse?.children[0].getBoundingClientRect().height
            }
        };
    }

    togglerProps () {
        return {
            className: [ 'navbar-toggler', !this.state.isCollapse && 'active' ].filter( Boolean ).join(" "),
            role: 'button',
            'aria-label': 'navbar toggler',
            onClick: this.toggleNavbar
        };
    }

    render () {
        return <nav id="navbar" role="navigation">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand"><img src="/images/brand.svg" alt="新南智慧農園" /></Link>
                <button { ...this.togglerProps() }>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div { ...this.collapseProps() } ref={ this.getCollaspe }>
                    <div className="navbar-collapse-wrapper">
                        <div className="navbar-nav">
                            <div className="nav-item"><Link to="/" className="nav-link" onClick={ this.closeNavbar }>首頁</Link></div>
                            <div className="nav-item"><Link to="/news" className="nav-link" onClick={ this.closeNavbar }>最新消息</Link></div>
                            <div className="nav-item"><Link to="/market" className="nav-link" onClick={ this.closeNavbar }>線上商店</Link></div>
                            <div className="nav-item"><Link to="/account" className="nav-link nav-option" onClick={ this.closeNavbar }><i className="icon">{ '\uE77B' }</i> { this.state.isLogin ? '會員中心': '登入 / 註冊'}</Link></div>
                            <div className="nav-item"><Link to="/cart" className="nav-link nav-option" onClick={ this.closeNavbar }><i className="icon">{ '\uF342' }</i> 我的商品</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    }
}