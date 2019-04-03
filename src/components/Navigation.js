import React from 'react'
import { NavLink } from 'react-router-dom'


class Navigation extends React.Component {
  render() {
    return (
      <div>
       <NavLink to="/">Home</NavLink>
       <p></p>
       <NavLink to="/about">About</NavLink>
       <p></p>
       <NavLink to="/projects">Projects</NavLink>
       <p></p>
       <NavLink to="/blog">blog</NavLink>
       <p></p>
       <NavLink to="/resume">Resume</NavLink>
      </div>
    )
  }
}

export default Navigation
