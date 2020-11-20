import React, { Component } from "react";
import MusicList from "../component/lists/music-list.component";
import UserHelper from "../dataHelpers/user-helper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import UtilsHelper from "../dataHelpers/utils-helper";

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
    const {
      match: { params },
    } = this.props;
    this.userId = 1;
    this.state = {
      name: [],
      songs: []
    };
    this.refreshState();
  }

  refreshState = async () => {

    let playlist = await userHelper.getPlaylistNameByPlaylistJoinId(this.userId, this.props.match.params.playlistId);
    let songsNotFormated = await userHelper.getAllSongByPlaylistJoinId(this.userId, this.props.match.params.playlistId);
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
