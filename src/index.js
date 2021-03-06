import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist} basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
