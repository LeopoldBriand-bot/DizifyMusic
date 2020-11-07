import React, { Component } from 'react';
import NavBar from '../component/navbar.component';
import SideBar from '../component/sidebar.component';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

class Home extends Component {
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
        <main
        className={clsx(this.props.classes.content, {
          [this.props.classes.contentShift]: this.state.openMenu,
        })}
      >
        <div className={this.props.classes.drawerHeader} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
