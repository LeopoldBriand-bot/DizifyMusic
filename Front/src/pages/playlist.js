import React, { Component } from "react";
import MusicList from "../component/lists/music-list.component";
import UserHelper from "../dataHelpers/user-helper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import UtilsHelper from "../dataHelpers/utils-helper";
import CommonDataManager from '../stores/data.store'

const userHelper = new UserHelper();
const utilsHelper = new UtilsHelper();

const styles = {
  heading: {
    fontSize: 15,
  },
};

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: this.props.match.params,
      name: [],
      songs: []
    };
    this.refreshState();
  }

  refreshState = async () => {

    let playlist = await userHelper.getPlaylistNameByPlaylistJoinId(CommonDataManager.getInstance().getUserID(), this.state.params.playlistId);
    let songsNotFormated = await userHelper.getAllSongByPlaylistJoinId(CommonDataManager.getInstance().getUserID(), this.state.params.playlistId);
    let songs = songsNotFormated.map(e => {
      return { ...utilsHelper.mapSongs(e.song), playlistId: e.id };
    });
    this.setState({
      name: playlist.name,
      songs: songs
    });
  }

  callbackForPlaylist = () => {
    console.log("Call BACK");
    this.refreshState();
  }


  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography className={this.props.classes.heading}>
          {this.state.name}
        </Typography>
        <MusicList songs={this.state.songs} fav={true} playlist={false} callbackForPlaylist={this.callbackForPlaylist}></MusicList>
      </div>
    );
  }
}

export default withStyles(styles)(Playlist);
