import { BrowserRouter, HashRouter } from "react-router-dom";

//访问http://localhost:3000/demo-7/，则切换到BrowserHistory
//访问http://localhost:3000/demo-7/#/，则切换到HashHistory;

const isWap = !/\/demo-7\/#\//.test(window.location.href);
const basename = "/demo-7";
const supportsHistory = "pushState" in window.history;

const AppRouter = isWap ? BrowserRouter : HashRouter;
const AppRouterProps = isWap
  ? {
      basename,
      forceRefresh: !supportsHistory
    }
  : {};

export { AppRouter, AppRouterProps };
