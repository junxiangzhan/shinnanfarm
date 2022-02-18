import React from "react";
import { Outlet } from "react-router-dom";

import ProdcutDetail from "../pages/product-detail";
import HomePage from "../pages/homepage";
import Market from "../pages/market";
import ProductList from "../pages/product-list";
import Account from "../pages/account";
import Cart from "../pages/cart";
import UserDetail from "../pages/user-detail";
import OrderHistory from "../pages/order-history";

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
        path: '/market/:name',
        element: <ProdcutDetail />
    }]
}, {
    path: '/account',
    element: <Account />,
    children: [ {
        path: '/account',
        element: <UserDetail />
    }, {
        path: '/account/orders',
        element: <OrderHistory />
    }]
}, {
    path: '/cart',
    element: <Cart />
}, {
    path: '*',
    element: <Outlet />
}]
