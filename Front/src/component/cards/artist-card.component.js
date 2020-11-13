import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    root: {
        height: 'auto',
        width: 151,
        margin: 0,

    },
    cover: {
        height: 151,
        width: 151,
    },
  });
  
  export default function ArtistCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
        {props.artist.image ? (
          <CardMedia
          className={classes.cover}
          image={props.artist.image}
          title={props.artist.name}
          />
          ) : (
            <CircularProgress />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.artist.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
         TODO
        </CardActions>
      </Card>
    );
  }