import React from "react";
import { Route, Routes, matchPath } from "react-router-dom";

import ProdcutDetail from "../pages/product-detail";
import HomePage from "../pages/homepage";
import Market from "../pages/market";

const routes = [];

routes.renderRoutes = function ({ routes = this }) {
    return <Routes>
        { routes.map( function ({ component: Component, componentProps = {}, ...props }, index ) {
            return <Route key={ index } element={ <Component { ...componentProps }/> } { ...props }/>
        }.bind( this ))}
    </Routes>
}.bind( routes );

routes.matchRoutes = function ( rawPath, routes = this, root = "" ) {
    return routes.reduce( function ( matches, route ) {
        const comparePath = `${root}/${route.path}`.replaceAll( /\//gm, '//' ).replaceAll( /\/:.*?\//gm, '/*/' ).replaceAll( /\/+/gm, '/' );

        if ( matchPath( comparePath, rawPath ) ) {
            matches.push([ route, matchPath( comparePath, rawPath )]);

            if ( route.component == this.renderRoutes ) {
                matches.push( ...this.matchRoutes( rawPath, route.componentProps.routes, comparePath.substring( 0, comparePath.length - 2 ) ) );
            }
        }

        return matches;
    }.bind( this ), []);
}.bind( routes );

export default Object.assign( routes, [ {
    exact: true,
    path: '/',
    component: HomePage
}, {
    path: '/market/*',
    component: routes.renderRoutes,
    componentProps: {
        routes: [ {
            path: '/',
            component: Market
        }, {
            path: '/:id',
            component: ProdcutDetail
        }]
    }
}]);
