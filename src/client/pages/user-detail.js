import React, { useState } from 'react';
import { useService } from '../service';
import { useAccountInformation } from './account';

export default function UserDetail () {

    const user = useAccountInformation();

    return <div id="user-detail">
        { Boolean( user ) && <>
            <h1>用戶資訊</h1>
            <AccountInfoForm />
            <UserInfoForm />
            <OrderDefaultForm />
        </> }
    </div>;
}

function AccountInfoForm () {
    const service = useService();
    const user = useAccountInformation() ?? {};

    const [ isLoading, setLoadingState ] = useState( false );

    const [ userNameInput, setUserNameInputElement ] = useState();
    const [ passwordInput, setPasswordInputElement ] = useState();
    const [ comfirmInput, setPasswordComfirmElement ] = useState();

    const [ inputError, setInputError ] = useState( false );

    function submitHandler ( event ) {
        event.preventDefault();
        let error = 0;

        if ( passwordConfirm.value !== passwordElement.value ) {
            error += 2
        };

        if ( passwordElement.value.length < 8 ) {
            error += 4
        };

        if ( error ) return setInputError( error );

        return ;

        service.register( userNameElement.value, passwordElement.value ).catch( function () {
            setInputError(1);
            setLoadingState( false );
        });
    }
    return <form onSubmit={ submitHandler }>
        <h2>帳戶資訊</h2>
        <label className="summary-form">
            帳號
            <input type="text" ref={ setUserNameInputElement } placeholder="帳號" title="請輸入您的姓名" defaultValue={ user.userName } required/>
        </label>
        <label className="summary-form">
            密碼
            <input type="password" ref={ setPasswordInputElement } placeholder="最少應有 8 個字元" required/>
        </label>
        <label className="summary-form">
            <input type="password" ref={ setPasswordComfirmElement } placeholder="請再次輸入密碼" required/>
        </label>

        { Boolean( inputError & 1 ) && <span className="error-message">使用者帳號已被使用</span> }
        { Boolean( inputError & 2 ) && <span className="error-message">輸入密碼並不相同</span> }
        { Boolean( inputError & 4 ) && <span className="error-message">密碼最少應有 8 個字元</span> }

        <button type="submit" disabled={ isLoading }>{ isLoading ? '載入中': '更改' }</button>
        <button type='reset'>重設</button>
    </form>;
}

function UserInfoForm () {

    const user = useAccountInformation();

    const [ nameInput, setNameInputElement ] = useState();
    const [ emailInput, setEmailInputElement ] = useState();

    function submitHandler ( event ) {
        event.preventDefault();
    }

    return <form onSubmit={ submitHandler }>
        <h2>使用者資訊</h2>
        <label className="summary-form">
            姓名
            <input type="text" ref={ setNameInputElement } placeholder="使用者姓名" title="請輸入您的姓名" defaultValue={ user.name }/>
        </label>
        <label className="summary-form">
            電子郵件
            <input type="email" ref={ setEmailInputElement } placeholder="使用者的電子郵件" pattern="[0-9]" title="請輸入您的電子郵件" defaultValue={ user.email }/>
        </label>
        <button type='submit'>更改</button>
        <button type='reset'>重設</button>
    </form>;
}

function OrderDefaultForm () {

    const user = useAccountInformation() ?? {};

    const [ nameInput, setNameInputElement ] = useState();
    const [ telInput, setTelInputElement ] = useState();
    const [ AddrInput, setAddrInputElement ] = useState();

    function submitHandler ( event ) {
        event.preventDefault();
    }

    return <form onSubmit={ submitHandler }>
        <h2>訂單資訊</h2>
        <p>以下資料將作為預設的訂單資訊，訂單送出前可再作修改。</p>
        <label className="summary-form">
            收件人
            <input type="text" ref={ setNameInputElement } placeholder="收件人姓名" title="請輸入收件人的姓名" defaultValue={ user.recipient }/>
        </label>
        <label className="summary-form">
            聯絡電話
            <input type="text" ref={ setTelInputElement } placeholder="手機或電話號碼" pattern="[0-9]" title="請輸入您的手機或電話號碼" defaultValue={ user.tel }/>
        </label>
        <label className="summary-form">
            送貨地址
            <input type="text" ref={ setAddrInputElement } placeholder="僅限台灣、澎湖、金門以及馬祖地區" title="請輸入送貨的收件地址" defaultValue={ user.address }/>
        </label>
        <button type='submit'>更改</button>
        <button type='reset'>重設</button>
    </form>;
}