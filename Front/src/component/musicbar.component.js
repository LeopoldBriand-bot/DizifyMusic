import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";

const NavBar = (props) => {
  const muiTheme = createMuiTheme({});
  const drawerWidth = 240;
  const playPauseButton = () => {
    props.changeOpen(true);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      marginRight: 0,
      marginLeft: 20,
    },
    musicBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      top: "auto",
      bottom: 0,
      height: 100,
    },
    musicBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      top: "auto",
      bottom: 0,
      height: 100,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }));

  const audioPlayerStyles = makeStyles((theme) => {
    return {
      root: {
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
      loopIcon: {
        color: "#3f51b5",
        "&.selected": {
          color: "#0921a9",
        },
        "&:hover": {
          color: "#7986cb",
        },
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
      playIcon: {
        color: "#f50057",
        "&:hover": {
          color: "#ff4081",
        },
      },
      volumeIcon: {
        color: "rgba(0, 0, 0, 0.54)",
      },
      volumeSlider: {
        color: "black",
      },
      progressTime: {
        color: "rgba(0, 0, 0, 0.54)",
      },
      mainSlider: {
        color: "#3f51b5",
        "& .MuiSlider-rail": {
          color: "#7986cb",
        },
        "& .MuiSlider-track": {
          color: "#3f51b5",
        },
        "& .MuiSlider-thumb": {
          color: "#303f9f",
        },
      },
    };
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          useStyles={audioPlayerStyles}
        />
      </div>
    </div>
  );
};
export default NavBar;
