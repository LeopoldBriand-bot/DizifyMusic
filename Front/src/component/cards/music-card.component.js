import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserHelper from "../../dataHelpers/user-helper";
import AddToPlaylist from "../add-to-playlist.component";

const userHelper = new UserHelper();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MusicCard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addPlaylist, setAddPlaylist] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addToFavorites = () => {
    let userId = 1;
    userHelper.addToFavorites("song", userId, props.song.id);
    setAnchorEl(null);
  };

  const addToPlaylist = () => {
    setAddPlaylist(true);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.song.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.song.artist}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="Add music to queue">
            <QueueMusicIcon/>
          </IconButton>
          <IconButton aria-label="Options" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MoreHorizIcon/>
          </IconButton>
          <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={addToPlaylist}>Add to a playlist</MenuItem>
                <MenuItem onClick={addToFavorites}>Add to favorites</MenuItem>
            </Menu>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.song.image}
        title={props.song.album}
      />
      <AddToPlaylist open={addPlaylist} setOpen={setAddPlaylist} songId={props.song.id}/> 
    </Card>
  );
}