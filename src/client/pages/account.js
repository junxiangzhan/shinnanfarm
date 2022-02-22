import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { store, useService } from "../service";

export default function Account () {
    const service = useService();
    const [ user, setUser ] = useState( service.getUser());

    useEffect( function () {

        const listenter = service.addListener( 'user', function () {
            const user = service.getUser();
            setUser( user );
        });

        return function () {
            service.removeListener( 'user', listenter );
        }
    }, []);

    function login ( userName, password ) {
        return service.userLogin( userName, password ).then( function ( token ) {
            setUser( token );
            return token;
        });
    }

    function logout () {
        service.userLogout();
        setUser( null );
    }

    function register ( userName, password ) {
        return service.userRegister( userName, password ).then( function ( token ) {
            setUser( token );
            return token;
        });
    }
    
    return <div id="account">
        { user ? <AccountDetail logout={ logout } user={ user }/>: <Forms login={ login } register={ register } /> }
    </div>;
}

function Forms ({ login, register }) {

    const [ form, setForm ] = useState( true );

    function setLogin () {
        setForm( true );
    }

    function setRegister () {
        setForm( false );
    }

    return <div id="form" className="navbar-space">
        <div className="form">
            <h2><span onClick={ setLogin } data-current={ form }>會員登入</span> / <span onClick={ setRegister } data-current={ !form }>註冊新會員</span></h2>
            { form ? <LoginForm login={ login }/>: <RegisterForm register={ register } /> }
        </div>
    </div>
}

function LoginForm ({ login }) {

    const [ isLoading, setLoadingState ] = useState( false );

    const [ userNameElement, setUserNameElement ] = useState( null );
    const [ passwordElement, setPasswordElement ] = useState( null );

    const [ inputError, setInputError ] = useState( false );
    
    function onSubmitHandle ( event ) {
        event.preventDefault();

        setLoadingState( true );

        login( userNameElement.value, passwordElement.value ).catch( function () {
            setLoadingState( false );
            setInputError( true );
        });
    }

    return <form onSubmit={ onSubmitHandle }>
        <label>
            <span>用戶名稱</span>
            <input name="username" type="text" placeholder="" ref={ setUserNameElement } autoComplete="off" required/>
        </label>
        <label>
            <span>用戶密碼</span>
            <input type="password" ref={ setPasswordElement } autoComplete="off" required/>
        </label>
        { inputError && <span className="error-message">帳號或密碼錯誤</span> }
        <button type="submit" aria-label="登入按鈕" disabled={ isLoading }>{ isLoading ? '載入中': '登入' }</button>
    </form>;
}

function RegisterForm ( props ) {

    const { register } = props;

    const [ isLoading, setLoadingState ] = useState( false );

    const [ userNameElement, setUserNameElement ] = useState( null );
    const [ passwordElement, setPasswordElement ] = useState( null );
    const [ passwordConfirm, setPasswordConfirm ] = useState( null );

    const [ inputError, setInputError ] = useState( false );

    function onSubmitHandle ( event ) {
        event.preventDefault();
        let error = 0;

        if ( passwordConfirm.value !== passwordElement.value ) {
            error += 2
        };

        if ( passwordElement.value.length < 8 ) {
            error += 4
        };

        if ( error ) return setInputError( error );

        register( userNameElement.value, passwordElement.value ).catch( function () {
            setInputError(1);
            setLoadingState( false );
        });
    }

    return <form onSubmit={ onSubmitHandle }>
        <label>
            <span>用戶名稱</span>
            <input type="text" ref={ setUserNameElement } name="username" autoComplete="off" required />
        </label>
        <label>
            <span>用戶密碼</span>
            <input type="password" ref={ setPasswordElement } autoComplete="off" placeholder="最少應有 8 個字元" required />
        </label>
        <label>
            <input type="password" ref={ setPasswordConfirm } autoComplete="off" placeholder="請再次輸入密碼" required />
        </label>

        { Boolean( inputError & 1 ) && <span className="error-message">使用者帳號已被使用</span> }
        { Boolean( inputError & 2 ) && <span className="error-message">輸入密碼並不相同</span> }
        { Boolean( inputError & 4 ) && <span className="error-message">密碼最少應有 8 個字元</span> }

        <button type="submit" aria-label="註冊按鈕" disabled={ isLoading }>{ isLoading ? '載入中': '註冊' }</button>
    </form>;
}

const AccountInformation = createContext();

function AccountDetail ( props ) {
    const { user: userToken } = props;
    const [ user, setUserDetail ] = useState( store.userDetail );

    useEffect( function () {
        if ( !user ) store.request( 'userDetail', userToken ).then( setUserDetail );
    }, []);

    return <div className="navbar-space container account-layout" style={{ maxWidth: "var(--max-width-container-xl)" }}>
        <AccountMenu />
        <AccountInformation.Provider value={ user }>
            <Outlet />
        </AccountInformation.Provider>
    </div>;
}

function AccountMenu () {
    return <div className="account-menu">
        <Link to="/account">用戶資訊</Link>
        <Link to="/account/orders">訂單記錄</Link>
    </div>;
}

export function useAccountInformation () {
    return useContext( AccountInformation );
}