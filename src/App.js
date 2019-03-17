import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

import "./App.css";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            component={Contact}
          />
          <Route
            path={process.env.PUBLIC_URL + "/projects"}
            component={Projects}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
