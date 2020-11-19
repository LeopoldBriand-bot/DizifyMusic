import React, { Component } from 'react';
import MusicList from '../component/lists/music-list.component';
import AlbumList from '../component/lists/album-list.component';
import ArtistList from '../component/lists/artist-list.component';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import SongHelper from '../dataHelpers/song-helper';
import AlbumHelper from '../dataHelpers/album-helper';
import ArtistHelper from '../dataHelpers/artist-helper';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

const songHelper = new SongHelper();
const albumHelper = new AlbumHelper();
const artistHelper = new ArtistHelper()

const styles = {
  heading: {
    fontSize: 15,
  },
};

class Search extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      artists: [],
      albums: []
    }
  }
  search = (event) => {
    this.updateStateWithData(event.target.value);
  }

  async updateStateWithData(keyWord) {
    let songs = await songHelper.search(keyWord);
    let albums = await albumHelper.search(keyWord);
    let artists = await artistHelper.search(keyWord);
    this.setState(
      {
        songs: songs,
        albums: albums,
        artists: artists
      }
    )
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <div>
          <SearchIcon />
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={this.search}
          />
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={this.props.classes.heading}>Songs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MusicList songs={this.state.songs} fav={true}></MusicList>
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
            <AlbumList albums={this.state.albums} fav={true}></AlbumList>
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
            <ArtistList artists={this.state.artists} fav={true}></ArtistList>
          </AccordionDetails>
        </Accordion>
      </div>
    )
  }
}

export default withStyles(styles)(Search)
