import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { Header, Content } from './../../components'
import './app.style.css'

class App extends Component {
/*
  constructor (...args) {
    super(...args);
  }
*/

  render () {
    return (
      <Grid fluid={true} className="app">
        <Header/>
        <Content/>
      </Grid>
    );
  }
}

export default App;