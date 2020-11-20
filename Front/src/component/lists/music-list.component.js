import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import UserHelper from "../../dataHelpers/user-helper";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddToPlaylist from "../add-to-playlist.component";
import CommonDataManager from '../../stores/data.store'

const userHelper = new UserHelper();

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function MusicList(props) {
  const classes = useStyles();
  const [addPlaylist, setAddPlaylist] = React.useState(false);
  const [modalPlaylistId, setModalPlaylistId] = React.useState(0);
  let userId = CommonDataManager.getInstance().getUserID();
  const addToFavorites = (id) => {

    userHelper.addToFavorites("song", userId, id);
  };
  const removeFromFavorites = (id) => {

    userHelper.removeFromFavorites("song", userId, id);
  };

  const addToPlaylist = (id) => {
    setAddPlaylist(true);
    setModalPlaylistId(id);
  };
  const removeFromPlaylist = (id) => {

    userHelper.removeSongFromPlaylist(userId, id);
    props.callbackForPlaylist();
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Album</TableCell>
            <TableCell align="right">Artist</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.songs.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.album}</TableCell>
              <TableCell align="right">{row.artist}</TableCell>
              <TableCell align="right">
                {props.fav && (
                  <IconButton
                    aria-label="Options"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={() => addToFavorites(row.id)}
                  >
                    <FavoriteIcon />
                  </IconButton>
                )}
                {props.playlist && (
                  <IconButton
                    aria-label="Options"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={() => addToPlaylist(row.id)}
                  >
                    <PlaylistAddIcon />
                  </IconButton>
                )}
                {!props.fav && (
                  <IconButton
                    aria-label="Options"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={() => removeFromFavorites(row.id)}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                )}
                {!props.playlist && (
                  <IconButton
                    aria-label="Options"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={() => removeFromPlaylist(row.playlistId)}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>

          ))}
          <AddToPlaylist open={addPlaylist} setOpen={setAddPlaylist} songId={modalPlaylistId} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
