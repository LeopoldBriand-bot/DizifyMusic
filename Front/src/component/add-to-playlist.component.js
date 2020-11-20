import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Modal } from '@material-ui/core';
import UserHelper from '../dataHelpers/user-helper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const userHelper = new UserHelper();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#ffffff',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddToPlaylist(props) {
  const userId = 1;
  const classes = useStyles();
  const [playlistsToRender, setPlaylistsToRender] = React.useState([]);
  const [playlist, setPlaylist] = React.useState([]);
  const [openSelect, setOpenSelect] = React.useState(false);

  const refreshPlaylist = async () => {
    let playlists = await userHelper.getPlaylists(userId);
    setPlaylistsToRender(playlists);
  }

  const addSongToPlaylist = async (songId, playlistId) => {
    await userHelper.addSongToPlaylist(songId, playlistId);
    this.refreshPlaylist();
  }

  const removePlaylist = async (id) => {
    await userHelper.removePlaylist(id);
    this.refreshPlaylist();
  }


  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChange = (event) => {
    setPlaylist(playlistsToRender.find((e) => e.id === event.target.value));
  };

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  const handleOpenSelect = () => {
    setOpenSelect(true);
  };

  const onSubmit = () => {
    if (playlist.id) {
      addSongToPlaylist(props.songId, playlist.id)
      handleClose();
    }
  };

  const body = (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add music to playlist
        </Typography>
        <form className={classes.form}>
          <Select
            labelId="open-select-label"
            id="open-select"
            open={openSelect}
            onClose={handleCloseSelect}
            onOpen={handleOpenSelect}
            value={playlist.songId}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em> </em>
            </MenuItem>
            {playlistsToRender.map((row) => (
              <MenuItem value={row.id}>{row.name}</MenuItem>
            ))}

          </Select>
          <Button
            onClick={onSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Choose
          </Button>
        </form>
      </div>
    </Container>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}