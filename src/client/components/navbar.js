import React from "react";
import { Link } from "react-router-dom";

/**
 * filter off falsy element & join class name together.
 * @param {*[]} classList className List
 * @returns { string }
 */
function $ ( classList ) {
    return classList.filter( Boolean ).join(" ");
}

export default class Navbar extends React.Component {
    render () {
        return <nav id="navbar">
            <Link to="/">新南 AI 農園</Link>
            <button className="navbar-toggler" role="button" aria-label="navbar toggler"></button>
            <div className={$([ 'navbar-collapse' ])}>
                
            </div>
        </nav>
    }
}