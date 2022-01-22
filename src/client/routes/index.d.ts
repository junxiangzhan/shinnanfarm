import { ReactElement, ComponentType, } from "react";

interface Route {
    path: string;
    component: ComponentType;
    componentProps: Object;
    exact?: boolean;
    key?: any;
}

interface routes extends Array<Route> {
    renderRoutes( {}: { routes: Array<Route> } ): ReactElement;
    matchRoutes( rawPath: string, routes: Array<Route>, root: string ): Array<Route>;
}

export default routes;