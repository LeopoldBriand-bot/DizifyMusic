import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Modal } from '@material-ui/core';
import UserHelper from '../dataHelpers/user-helper';

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

export default function SignUp(props) {
  const classes = useStyles();

    const [isFirstName, setIsFirstName] = React.useState(false);
    const [isLastName, setIsLastName] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [isEmail, setIsEmail] = React.useState(false);
    const [isSubmit, setIsSubmit] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

  const regexFirstName = new RegExp("^(?!\s*$).+");
  const regexLastName = new RegExp("^(?!\s*$).+");
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  const handleClose = () => {
    props.setOpen(false);
    setIsSubmit(false);
    setIsFirstName(false);
    setIsLastName(false);
    setIsEmail(false);
    setIsPassword(false);
  };

  const onSubmit = () => {

    setFirstName(Boolean(regexFirstName.exec(firstName)));
    setLastName(Boolean(regexLastName.exec(lastName)));
    setIsEmail(Boolean(regexEmail.exec(email)));
    setIsPassword(Boolean(regexPassword.exec(password)));

    if (Boolean(regexFirstName.exec(firstName)) && Boolean(regexLastName.exec(lastName)) && Boolean(regexEmail.exec(email)) && Boolean(regexPassword.exec(password))) {
        const helper = new UserHelper();
        helper.createUser({firstName, lastName, email, password});
        props.setAuth(true);
        handleClose()
    } else {
        setIsSubmit(true);
    }

  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const goToLogin = () => {
    handleClose()
    props.openLogin(true);
  }

  const body = (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={isSubmit && !isFirstName}
                helperText={isSubmit && !isFirstName ? ('FistName is empty') : null}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={isSubmit && !isLastName}
                helperText={isSubmit && !isLastName ? ('LastName is empty') : null}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleLastNameChange}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={isSubmit && !isEmail}
                helperText={isSubmit && !isEmail ? ('Invalid Email - Must have format like test@test.com') : null}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={isSubmit && !isPassword}
                helperText={isSubmit && !isPassword ? ('Invalid Password - Must have one symbol, one uppercase, one lowercase and one number / minimum: 8 characters') : null}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
          <Button
            onClick={onSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={goToLogin} variant="body2">
                Already have an account ? Sign In
              </Link>
            </Grid>
          </Grid>
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