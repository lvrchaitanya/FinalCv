import React from "react";
import ReactDOM from "react-dom";

import About from "./about";
import Home from "./home";
import Nav from "./navbar";
import Fot from "./fotter";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>

      <Fot />
    </Router>
  </React.StrictMode>,
  rootElement
);
