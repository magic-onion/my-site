import React, { Component } from 'react';
import About from './containers/About'
import Projects from './containers/Projects'
import Blog from './containers/Blog'
import Resume from './containers/Resume'
import SocialLinks from './components/Social'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
