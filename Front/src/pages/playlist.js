import React, { Component } from "react";
import MusicList from "../component/lists/music-list.component";
import UserHelper from "../dataHelpers/user-helper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const userHelper = new UserHelper();

const styles = {
  heading: {
    fontSize: 15,
  },
};

class Playlist extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params },
    } = this.props;
    let userId = "DREFDFG25ihF5";
    this.state = {
      name: userHelper.getPlaylistById(userId, params.playlistId).name,
      songs: userHelper.getPlaylistById(userId, params.playlistId).songs,
    };
  }
  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography className={this.props.classes.heading}>
          {this.state.name}
        </Typography>
        <MusicList songs={this.state.songs} fav={true} playlist={false}></MusicList>
      </div>
    );
  }
}

export default withStyles(styles)(Playlist);
