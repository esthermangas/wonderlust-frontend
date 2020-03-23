import React, { useState} from 'react';
import {Typography, Container, TextField, Grid, Paper, Button } from '@material-ui/core';
import { useHistory, } from 'react-router';
import styles from './singUp.module.css';


const SignUp = props => {
  const history = useHistory();
  const [info, setInfo] = useState({name: "", email: "", password: "", password2: ""});
  const [passwordMismatch, setpasswordMismatch] = useState(false);
  const [error, setError] = useState({name: "", email:"", password:""});
  const [emailError, setEmailError] = useState("");


const updateInput = (e, key) => {
  setInfo({... info, [key] : e.target.value});
};

const resgister = (e) => {
  e.preventDefault();
  if (info.password !== info.password2) {
    setpasswordMismatch(true);
    return;
  }
  setpasswordMismatch(false);
  fetch("http://localhost:3001/api/auth/register", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(info)
  }).then(res => res.json()).then(res => {
    if(res.error) {
      setError(res.error)
    }else if (res.message) {
      setEmailError(res.message);
    }else{
    localStorage.setItem("jwt", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
    setError({name:"", email:"", password:""});
    setInfo({name:"", email:"", password:"", password2: ""});
    setEmailError("");
    history.push('/');
    }
  })
};

return (
  <Container className={styles.containerPrincipal}>
    <Typography align='center' variant="h4">
      Sign Up!
    </Typography>
    <Container className={styles.container} maxWidth="sm">
      <Paper className={styles.paper}>
        <form autoComplete="off" noValidate>
          <Grid container direction="column" spacing={4}>
            <Grid item xs={12} align="center">
              <TextField label="First and Last Name" className={styles.input} helperText={error.name} value={info.name} error={error.name} onChange={e => updateInput(e,"name")} />
            </Grid>
            <Grid item xs={12} align="center">
              <TextField label="Email" className={styles.input} value={info.email} helperText={error.email ? error.email : emailError} error={error.email || emailError} onChange={e => updateInput(e, "email")} />
            </Grid>
            <Grid item xs={12} align="center">
              <TextField type="password" label="Password" className={styles.input} value={info.password} error={error.password} helperText={error.password} onChange={e => updateInput(e, "password")} />
            </Grid>
            <Grid item xs={12} align="center">
              <TextField type="password" label="Confirm password" helperText={passwordMismatch ? "The passwords do not match.": ""} error={passwordMismatch} className={styles.input} value={info.password2} onChange={e => updateInput(e, "password2")} />
            </Grid>
            <Grid item align="center" xs={12}>
              <Button size="medium" variant="contained" color="primary" onClick={resgister}>
                send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  </Container>
  )

};


export default SignUp;