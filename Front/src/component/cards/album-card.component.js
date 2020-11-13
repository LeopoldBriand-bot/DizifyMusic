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
  
  export default function AlbumCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
        {props.album.image ? (
          <CardMedia
          className={classes.cover}
          image={props.album.image}
          title={props.album.title}
          />
          ) : (
            <CircularProgress />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.album.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
         TODO
        </CardActions>
      </Card>
    );
  }