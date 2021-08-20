import React from 'react'
import { NavLink } from 'react-router-dom'


class Navigation extends React.Component {
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", padding: "12px"}}>
       <NavLink style={{margin: "4px"}} to="/">Home</NavLink>
       <NavLink style={{margin: "4px"}} to="/about">About</NavLink>
       <NavLink style={{margin: "4px"}} to="/projects">Projects</NavLink>
       <NavLink style={{margin: "4px"}} to="/blog">blog</NavLink>
       <a target="blank" href="https://drive.google.com/file/d/1-yRRCplwY0iTEpZ26wqhOKimR_Zp8KVP/view?usp=sharing">Resume</a>
      </div>
    )
  }
}

export default Navigation
