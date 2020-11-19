import React, { Component } from 'react';
import MusicList from '../component/lists/music-list.component';
import AlbumList from '../component/lists/album-list.component';
import ArtistList from '../component/lists/artist-list.component';
import UserHelper from '../dataHelpers/user-helper';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

const userHelper = new UserHelper();

const styles = {
  heading: {
    fontSize: 15,
  },
};

class Favorites extends Component {
  constructor() {
    super();
    let userId = 1;

    this.state = {
      songs: [],
      artists: [],
      albums: []
    }
    this.updateStateWithData(userId);
  }

  async updateStateWithData(userId) {
    let favorites = await userHelper.getFavorites(userId);
    this.setState(
      {
        songs: favorites.songs,
        artists: favorites.artists,
        albums: favorites.albums
      }
    )
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={this.props.classes.heading}>Songs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MusicList songs={this.state.songs} fav={false}></MusicList>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={this.props.classes.heading}>Albums</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AlbumList albums={this.state.albums} fav={false}></AlbumList>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={this.props.classes.heading}>Artists</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ArtistList artists={this.state.artists} fav={false}></ArtistList>
          </AccordionDetails>
        </Accordion>
      </div>
    )
  }
}

export default withStyles(styles)(Favorites)
