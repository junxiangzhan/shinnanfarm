import React, { useState } from "react";

export default function Searchbar ( props ) {
    const [ searchBox, getSearchBox ] = useState( null );

    function submitHandler ( event ) {
        event.preventDefault();
        console.log( searchBox.value );
    }

    return <form className="searchbar" onSubmit={ submitHandler }>
        <input type="text" ref={ getSearchBox } placeholder="搜索…" />
        <button type="submit"><i className="icon icon-alt icon-bold">{ '\uE721' }</i></button>
    </form>
}