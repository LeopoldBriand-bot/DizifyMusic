import React, { Component } from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import Routing from './component/route.component';
import NavBar from './component/navbar.component';
import SideBar from './component/sidebar.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = {
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 70,
  },
  contentShift: {
    marginLeft: drawerWidth,
    marginTop: 70,
  },
};

class App extends Component {
  constructor() {
    super()
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
        <main
        className={clsx(this.props.classes.content, {
          [this.props.classes.contentShift]: this.state.openMenu,
        })}
      >
          <div className={this.props.classes.drawerHeader} />
            <Router>
              <Routing></Routing>
            </Router>
        </main>
      </div>
    )
  }
}
export default withStyles(styles)(App)
