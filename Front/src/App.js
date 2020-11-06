import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routing from './component/route.component';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routing></Routing>
        </Router>
      </div>
    )
  }
}
export default App
