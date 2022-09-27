import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import DemoProject from "../components/DemoProject/DemoProject";
import UserListClass from "../components/UserListClassBased/UserListClassBased";

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact={true} />
                <Route path='/user-class' component={UserListClass} />
                <Route path='/demo-project' component={DemoProject} />
                {/* <Route path='*' component={NoMatch} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Router;