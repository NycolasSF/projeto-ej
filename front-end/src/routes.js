import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Detail_task from "./pages/Detail_task";
import Create_task from "./pages/Create_task";
import Edit_task from "./pages/Edit_task";
import User_config from "./pages/User_config";

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Logon} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/task" component={Detail_task} />
          <Route path="/task/create" component={Create_task} />
          <Route path="/task/edit" component={Edit_task} />
          <Route path="/user/config" component={User_config} />
        </Switch>
      </BrowserRouter>
    );
}