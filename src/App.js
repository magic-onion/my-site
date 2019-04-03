import React, { Component } from 'react';
import About from './containers/About'
import Projects from './containers/Projects'
import Blog from './containers/Blog'
import Resume from './containers/Resume'
import SocialLinks from './components/Social'
import Home from './containers/Home'
import { Route, Switch } from "react-router-dom";
// import TableExamplePagination from './containers/TableExamplePagination'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <About/>
        <Projects/>
        <Blog/>
        <Resume/>
        <SocialLinks/>
      </div>
    );
  }
}

export default App;
