import HomePage from "./pages/homepage";
import Market from "./pages/market";

const routes = [ {
    exact: true,
    path: '/',
    component: HomePage
}, {
    path: '/market',
    component: Market
}]

export default routes;
console.log( Market.getInitialData() )