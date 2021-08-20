import React, { Component } from 'react';
import About from './containers/About'
import Projects from './containers/Projects'
import Blog from './containers/Blog'
import Resume from './containers/Resume'
import SocialLinks from './components/Social'
import Home from './containers/Home'
import Navigation from './components/Navigation'


import { Route } from "react-router-dom";
// import TableExamplePagination from './containers/TableExamplePagination'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/about' component={About}/>
        <SocialLinks/>
      </div>
    );
  }
}

export default App;
