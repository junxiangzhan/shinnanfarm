import React from "react";

export default function Breadcrumb ( props ) {
    
    return <div className="breadcrumb">
        { props.children?.map ? props.children.map( function ( child, index, children ) {
            return <React.Fragment key={ index }>
                <div>{ child }</div>
                { index != children.length - 1 && <div className="separator">{ props.separator ?? '/' }</div> }
            </React.Fragment>
        }): props.children }
    </div>;
}