import React from 'react'
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';

const NavBar = (props) => {
    // TODO: Use store to get auth informations
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const userOpened = Boolean(anchorEl);
    const drawerWidth = 240;
    const handleDrawerOpen = () => {
      props.changeOpen(true);
    };
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        hide: {
          display: 'none',
        },
        appBar: {
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        appBarShift: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }));

    const classes = useStyles(); 

    // TODO: open login form
    const onConnect = (event) => {
      setAuth(event.target.checked);
      setAuth(true);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    //TODO: Remove auth information from store
    const onDisconnect = (event) => {
        setAuth(false);
        setAnchorEl(null);
        setAuth(event.target.checked);
      };
      
    return(
        <div className={classes.root}>
        <AppBar position="fixed" className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}>
            <Toolbar>
                <IconButton 
                  edge="start" 
                  className={clsx(classes.menuButton, props.open && classes.hide)} 
                  onClick={handleDrawerOpen}
                  color="inherit" 
                  aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} color="inherit">
                    Dizify Music
                </Typography>
                {!auth && ( <div>
                    <Button color="inherit">Sign In</Button>
                    <Button color="inherit" onClick={onConnect}>Login</Button>
                </div>)}
                {auth && (
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={userOpened}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={onDisconnect}>Disconnect</MenuItem>
                    </Menu>
                </div>
                )}
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;