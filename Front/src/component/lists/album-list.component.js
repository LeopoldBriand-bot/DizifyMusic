import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AlbumCard from '../cards/album-card.component';


const useStyles = makeStyles( (theme) => ({
  root: {
    display: 'flex',
  }
}));

export default function AlbumList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          {props.albums.map((row) => (
            <AlbumCard album={row} key={row.id}></AlbumCard>
          ))} 
    </div>

  );
}