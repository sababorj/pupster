import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./component/NavTabs";
import About from "./component/pages/About";
import Discover from "./component/pages/Discover";
import Search from "./component/pages/Search";

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <NavTabs />
         <Route exact path="/" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route path="/search" component={Search} />
       </div>
     </Router>
    )
  }
}

export default App;
