import React, { Component } from 'react';
import Resume from "./pages/Resume"
// import { Route } from "react-router-dom";
import {Paper, Container} from "@mui/material"

class App extends Component {
  render() {
    return (
      <Container>

     <Paper>
       <Resume/>
       </Paper>
        </Container>
    );
  }
}

export default App;
