import React from 'react';
import {Typography, Container, TextField, Grid, Paper, Button } from '@material-ui/core';
import styles from './singUp.module.css';

const SignUp = props => {
  return (
    <Container className={styles.containerPrincipal}>
      <Typography align='center' variant="h4">
        Registrate!
      </Typography>
      <Container className={styles.container} maxWidth="sm">
        <Paper className={styles.paper}>
          <Grid container direction="column" spacing={4}>
            <Grid item xs={12} align="center">
              <TextField label="Nombre y Apellidos" className={styles.input}  />
            </Grid>
            <Grid item xs={12} align="center">
              <TextField label="Correo electrónico" className={styles.input}  />
            </Grid>
            <Grid item xs={12} align="center">
              <TextField label="Contraseña" className={styles.input} />
            </Grid>
            <Grid item xs={12} align="center">
              <TextField label="Confirmar Contraseña" className={styles.input} />
            </Grid>
            <Grid item align="center" xs={12}>
              <Button size="medium" variant="contained" color="primary">
                ADELANTE
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Container>
  )

};

export default SignUp;