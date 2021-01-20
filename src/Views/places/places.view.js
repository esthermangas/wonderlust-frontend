import React, { useEffect, useState } from 'react';
import ListCard from '../../Components/ListCard';
import Container from '@material-ui/core/Container';
import styles from './places.module.css';
import { Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useFormContext } from './Context/form.context';
import {contextWrapper} from './Context/form.context.provider';
import { formAction } from './Context/form.actions';
import ModalPlace from './modalPlace';

const MyPlaces = props => {
  const {state, dispatchForm} = useFormContext();
  const handleClick = (e) => {
      dispatchForm({type: formAction.FORM_SET_MODE, payload: 'add'});
      dispatchForm({type: formAction.FORM_RESET_MODAL_DATA});
      dispatchForm({type:formAction.FORM_SET_OPEN_MODAL, payload: true});
  };


  useEffect(() => {
    fetch('http://localhost:3001/api/place', {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(res =>res.json()).then(res=>{
      dispatchForm({type: formAction.FORM_SET_PLACES, payload: res});

    });
  }, [state.openModal]);
  return(
    <>
      <Container className={styles.container}>
        <Typography className={styles.title} variant="h5" align='center'>Your Places list</Typography>
        <ListCard elements={state.places} type="place" edit />
      </Container>
      <ModalPlace />
      <Fab color='primary' className={styles.actionButton} onClick={handleClick}>
        <AddIcon />
      </Fab>
    </>
  )
};

export default contextWrapper(MyPlaces);