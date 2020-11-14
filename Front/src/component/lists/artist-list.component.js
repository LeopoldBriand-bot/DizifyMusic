import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArtistCard from '../cards/artist-card.component';


const useStyles = makeStyles( (theme) => ({
  root: {
    display: 'flex',
  }
}));

export default function ArtistList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          {props.artists.map((row) => (
            <ArtistCard artist={row} key={row.id} fav={props.fav}></ArtistCard>
          ))} 
    </div>

  );
}