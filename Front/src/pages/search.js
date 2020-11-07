import React, { Component } from 'react'
import NavBar from '../component/navbar.component'
import SideBar from '../component/sidebar.component'
import CssBaseline from '@material-ui/core/CssBaseline';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false
    }
    this.changeOpenState = (newValue) => {this.setState({
      openMenu: newValue
    })}
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <NavBar open = {this.state.openMenu} changeOpen={this.changeOpenState}/>
        <SideBar open = {this.state.openMenu} changeOpen={this.changeOpenState}/>
        <div>
            Search
        </div>
      </div>
    )
  }
}