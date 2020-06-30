import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RouterConfig from './pages/RouterConfig';

export default function Routes() {  
    return (
      <Router>
        <RouterConfig />
      </Router>
    );


}