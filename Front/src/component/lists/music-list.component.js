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

const userHelper = new UserHelper();

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const handleClick = (event) => {
  console.log(event);
};

export default function MusicList(props) {
  const classes = useStyles();
  const addToFavorites = (id) => {
    let userId = 1;
    userHelper.addToFavorites("song", userId, id);
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
