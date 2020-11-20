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
import { Button } from '@material-ui/core';

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
      openAddPlaylistModal: false,
      playlistsToRender: []
    }
    this.refreshPlaylist();
  }

  refreshPlaylist = async () => {
    let playlists = await userHelper.getPlaylists(userId);
    this.setState({
      playlistsToRender: playlists
    });
  }

  addPlaylist = async (name) => {
    await userHelper.addPlaylist(userId, name);
    this.refreshPlaylist();
  }

  removePlaylist = async (id) => {
    await userHelper.removePlaylist(id);

    this.refreshPlaylist();

  }

  openModal() {
    this.setState({ openAddPlaylistModal: true });
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
            <ListItemIcon button onClick={() => { this.openModal(); }}>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <AddPlaylist open={this.state.openAddPlaylistModal} setOpen={(value) => { this.setState({ openAddPlaylistModal: value }) }} callback={this.addPlaylist} />
          </ListItem>
          {this.state.playlistsToRender.map((playlist, index) => (

            <ListItem key={playlist.id}>
              <Button href={`/playlist/${playlist.id}`}>{playlist.name}</Button>

              <ListItemIcon button onClick={() => this.removePlaylist(playlist.id)}>
                <DeleteForeverIcon />
              </ListItemIcon>
            </ListItem>

          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Playlist);
