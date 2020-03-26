import React, { useState} from 'react';
import {Typography, Container, TextField, Grid, Paper, Button } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import styles from './logIn.module.css';

const LogIn = props => {
  const [data, setData] = useState({email: "", password:""});
  const [error, setError] = useState("");
  const history = useHistory();
  const updateLog = (e, key) => {
    setData({...data, [key]: e.target.value});
  };

  const login = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(res => {
      if (res.message){
        setError(res.message);
      } else if (res.msg) {
        setError(res.msg);
      } else if (res.error) {
        setError(res.error.email);
      }else {
        localStorage.setItem("jwt", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        history.push("/home");
      }
    })
  };

  return (
    <Container className={styles.containerPrincipal}>
      <Typography align='center' variant="h4">
        Log In!
      </Typography>
      <Container className={styles.container} maxWidth="sm">
        <Paper className={styles.paper}>
          <form autoComplete="off" noValidate>
            <Grid container direction="column" spacing={4}>
              {error && (
              <Typography align='center' className={styles.error}>
                {error}
              </Typography>
)}
              <Grid item xs={12} align="center">
                <TextField label="Email" value={data.email} error={error} className={styles.input} onChange={e => updateLog(e, "email")} />
              </Grid>
              <Grid item xs={12} align="center">
                <TextField type="password" value={data.password} error={error} label="Password" className={styles.input} onChange={e => updateLog(e,"password")} />
              </Grid>
              <Grid item align="center" xs={12}>
                <Button size="medium" variant="contained" color="primary" onClick={login}>
                  send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      <div>
        <Grid alignContent="center" className={styles.gridLink}>
          <Typography align="center">
            Not registred yet? Do it 
            {' '}
            <Link to="/signup">here</Link>
            .
          </Typography>
        </Grid>
      </div>
    </Container>
  )
};

export default LogIn;