import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
export default class App extends Component {
  apiKey = "6a6b787c519a4d56930d8ba4f5c08949"

  state = {
    progress: 0
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/"><News apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" /></Route>
          <Route exact path="/sports"><News apiKey={this.apiKey} key="sports" pageSize={6} country="in" category="sports" /></Route>
          <Route exact path="/science"><News apiKey={this.apiKey} key="science" pageSize={6} country="in" category="science" /></Route>
          <Route exact path="/technology"><News apiKey={this.apiKey} key="technology" pageSize={6} country="in" category="technology" /></Route>
          <Route exact path="/entertainment"><News apiKey={this.apiKey} key="entertainment" pageSize={6} country="in" category="entertainment" /></Route>
          <Route exact path="/health"><News apiKey={this.apiKey} key="health" pageSize={6} country="in" category="health" /></Route>
          <Route exact path="/business"><News apiKey={this.apiKey} key="business" pageSize={6} country="in" category="business" /></Route>
          <Route exact path="/general"><News apiKey={this.apiKey} key="general" pageSize={6} country="in" category="general" /></Route>
        </Router>
      </div>
    )
  }
}


