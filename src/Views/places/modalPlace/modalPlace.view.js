import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Button, Grid, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import styles from '../places.module.css';
import { useFormContext } from '../Context/form.context';
import { formAction } from '../Context/form.actions';

const ModalPlace = props => {
  const {state, dispatchForm} = useFormContext();
  const handleChange = (e, key) => {
    dispatchForm({type:formAction.FORM_SET_MODAL_DATA, payload:{...state.modalData, [key]: e.target.value}})
  };
  const handleSendData = () => {
    let url = 'http://localhost:3001/api/place';
    if(state.mode === 'edit'){
      url += `/${state.modalData._id}`;
    }

    fetch(url, {
      method: state.mode === 'add' ? 'POST': 'PATCH',
      mode: 'cors',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city: state.modalData.city,
        guests: state.modalData.guests,
        facilities: state.modalData.facilities.split(','),
        description: state.modalData.description
      })
    }).then(res => res.json()).then(res => {
      dispatchForm({type:formAction.FORM_SET_OPEN_MODAL, payload: false});
    });
  };

  return (
    <Dialog open={state.openModal}>
      <DialogTitle>
        Add a new place
      </DialogTitle>
      <DialogContent>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6}>
            <TextField label="City" fullWidth value={state.modalData.city} onChange={(e) => handleChange(e, 'city')} />
          </Grid>
          <Grid item xs={6}>
            <TextField label='Number of guests' fullWidth value={state.modalData.guests} onChange={(e) => handleChange(e, 'guests')} />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Facilities' fullWidth value={state.modalData.facilities} onChange={(e) => handleChange(e, 'facilities')} />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Description' fullWidth value={state.modalData.description} onChange={(e) => handleChange(e, 'description')} />
          </Grid>
          <Grid item xs={12}>
            <div className={styles.button}>
              <Button variant="contained" color="primary" onClick={handleSendData}>
                ADD
              </Button>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ModalPlace;