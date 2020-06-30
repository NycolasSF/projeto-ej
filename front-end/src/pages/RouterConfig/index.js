import React from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

import Logon from "../Logon";
import Register from "../Register";
import Dashboard from "../Dashboard";
import Detail_task from "../Detail_task";
import Create_task from "../Create_task";
import Edit_task from "../Edit_task";
import User_config from "../User_config";
import NotFound from "../NotFound";


export default function RouterConfig (){

    let location = useLocation();
    console.log(location);
    
    let background = location.state && location.state.background;

    return( 
        <div>
            <Switch location={background || location}>
                <Route path="/" exact children={<Logon />} />
                <Route path="/register" children={<Register />} />
                <Route path="/dashboard" children={<Dashboard />} />
                <Route path="/user/config" children={<User_config />} />
                <Route path="*" children={<NotFound />} />
            </Switch>
            {/* MODALs */}
            {
                background && <Route path="/task/create" children={<Create_task />} />,
                background && <Route path="/task/edit/:id" children={<Edit_task />} />,
                background && <Route path="/task/detail/:id" children={<Detail_task />} />
            }
        </div>
    )
}