import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch, Link} from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';


import "./App.css";
import About from './components/About';

class App extends Component {
  
  render() {
    
    return (
      <div className="container">
     
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route   path="/about" component={About} /> 
        <Route   path="/contact" component={Contact} />
        <Route   path="/projects" component={Projects} />
      </Switch>
      </div>
    );
  }
}

export default App;
