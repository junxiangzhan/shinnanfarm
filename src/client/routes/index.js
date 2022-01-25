import React from "react";
import { Outlet } from "react-router-dom";

import ProdcutDetail from "../pages/product-detail";
import HomePage from "../pages/homepage";
import Market from "../pages/market";
import ProductList from "../pages/product-list";

export default [ {
    path: '/',
    element: <HomePage />
}, {
    path: '/market',
    element: <Market />,
    children: [ {
        path: '/market',
        element: <ProductList />
    }, {
        path: '/market/:id',
        element: <ProdcutDetail />
    }]
}, {
    path: '*',
    element: <Outlet />
}]
