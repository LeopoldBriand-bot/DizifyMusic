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

export default function ArtistCard(props) {
  const classes = useStyles();
  const addToFavorites = () => {
    userHelper.addToFavorites("artist", props.id);
  };

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
        <div className={classes.details}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.artist.name}
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
