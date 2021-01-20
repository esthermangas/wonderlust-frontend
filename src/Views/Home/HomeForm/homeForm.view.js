import React from 'react';
import { Container, Paper, TextField, Typography, Grid, Button } from '@material-ui/core';
import styles from './homeForm.module.css';
import DatePicker from '../../../Components/datePicker';
import { useHomeContext } from '../Context/home.context';
import { homeAction} from '../Context/home.actions';

const HomeForm = props => {
  const {onClickSearch} = props;
  const {state, dispatch} = useHomeContext();
  const handleChangeWhere = (e) => {
    e.preventDefault();
    dispatch({type: homeAction.HOME_SET_DATOS , payload: {where: e.target.value}});
  };
  const handleChangeGuests = (e) => {
    e.preventDefault();
    dispatch({type: homeAction.HOME_SET_DATOS , payload: {guests: e.target.value}});
  };
  const handleChangeCheckin = date => {
    dispatch({type: homeAction.HOME_SET_DATOS , payload: {checkin: date}});
  };
  const handleChangeCheckout = date => {
    dispatch({type: homeAction.HOME_SET_DATOS , payload: {checkout: date}});
  };
  return (
    <>
      <Typography variant='h5' align='center' >
        Search places and experiences
      </Typography>
      <Container maxWidth="sm" className={styles.paperContainer}>
        <Paper className={styles.paper}>
          <div className={styles.whereInput}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField label="Where?" fullWidth value={state.formData.where} onChange={handleChangeWhere} />
              </Grid>
              <Grid item xs={6}>
                <DatePicker disableToolbar label="Check-in" autoOk disablePast value={state.formData.checkin} fullWidth onChange={handleChangeCheckin} variant="inline" format="DD/MM/YYYY" />
              </Grid>
              <Grid item xs={6}>
                <DatePicker disableToolbar autoOk minDate={state.formData.checkin} disablePast label="Checkout" value={state.formData.checkout} onChange={handleChangeCheckout} fullWidth variant="inline" format="DD/MM/YYYY" />
              </Grid>
              <Grid item xs={12}>
                <TextField label='Number of guests' value={state.formData.guests} fullWidth type="number" onChange={handleChangeGuests} />
              </Grid>
              <Grid item xs={12}>
                <div className={styles.button}>
                  <Button variant="contained" color="primary" onClick={(e) => onClickSearch()} >
                    Search
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </>
  )
};


export default HomeForm;
