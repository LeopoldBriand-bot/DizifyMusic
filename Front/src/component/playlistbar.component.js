import React, { Component } from "react";
import UserHelper from "../dataHelpers/user-helper";
import { withStyles } from "@material-ui/core/styles";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddPlaylist from "./add-playlist.component";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const userHelper = new UserHelper();
const userId = 1
const styles = {
  heading: {
    fontSize: 15,
  },
};

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
        openAddPlaylistModal: false
    }
  }

  removePlaylist = (id) => {
    userHelper.removePlaylist(id);
  }

  
  render() {
    return (
      <div className={this.props.classes.root}>
        <List>
          <ListItem>
            <ListItemIcon>
              <QueueMusicIcon />
            </ListItemIcon>
            <ListItemText primary="PlayLists" />
            <ListItemIcon button onClick={() => {this.setState({openAddPlaylistModal: true})}}>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <AddPlaylist open={this.state.openAddPlaylistModal} setOpen={(value) => {this.setState({openAddPlaylistModal: value})}}/>
          </ListItem>
          {userHelper.getPlaylists(userId).map((playlist, index) => (
            <ListItem button key={playlist.name} component={Link} to={`/playlist/${playlist.id}`}>
              <ListItemText primary={playlist.name} />
              <ListItemIcon button onClick={() => this.removePlaylist(playlist.id)}>
                <DeleteForeverIcon/>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Playlist);
