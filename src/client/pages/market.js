import React from "react";
import { Outlet } from "react-router-dom";

export default function Market () {
    return <div id="market">
        <div className="navbar-space container" style={{ maxWidth: 'var(--max-width-container-xl)' }}>
            <Outlet />
        </div>
    </div>
}
