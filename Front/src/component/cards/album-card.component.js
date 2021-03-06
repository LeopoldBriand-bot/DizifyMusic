import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserHelper from "../../dataHelpers/user-helper";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommonDataManager from '../../stores/data.store'

const userHelper = new UserHelper();

const useStyles = makeStyles({
  root: {
    height: "auto",
    width: 151,
    margin: 0,
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    height: 151,
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
  },
});

export default function AlbumCard(props) {
  const classes = useStyles();
  const addToFavorites = () => {
    let userId = CommonDataManager.getInstance().getUserID();
    userHelper.addToFavorites("album", userId, props.album.id);
  };
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
        <div className={classes.details}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.album.title}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <div className={classes.controls}>
        {props.fav && (
          <CardActions>
            <IconButton
              aria-label="Options"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={addToFavorites}
            >
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        )}
      </div>
    </Card>
  );
}
