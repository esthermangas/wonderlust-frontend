import React from 'react';
import {Typography, Card, CardContent, CardActions, Button} from '@material-ui/core';
import { useHistory } from 'react-router';
import styles from './placesCard.module.css'
import { useHomeContext } from '../../Views/Home/Context/home.context';
import { useFeedbackContext } from '../appBar/Context/feedback.context';
import { feedbackAction } from '../appBar/Context/feedback.actions';
import { useFormContext } from '../../Views/places/Context/form.context';
import { formAction } from '../../Views/places/Context/form.actions';

const PlaceCard = props => {
  const {place, bookButton, edit} = props;
  const {state} = useHomeContext();
  const {dispatch} = useFeedbackContext();
  const {dispatchForm} = useFormContext();
  const history = useHistory();
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  };

  const handleClickEdit = () => {
    dispatchForm({type: formAction.FORM_SET_MODE, payload: 'edit'});
    dispatchForm({type: formAction.FORM_SET_MODAL_DATA, payload: {...place, facilities: place.facilities.join(',')}});
    dispatchForm({type: formAction.FORM_SET_OPEN_MODAL, payload: true});
  };

  const handleClick = () => {
    fetch('http://localhost:3001/api/booking', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        endDate: state.formData.checkout,
        startDate: state.formData.checkin,
        guests: state.formData.guests,
        // eslint-disable-next-line no-underscore-dangle
        place_id: place._id
      })
    }).then(res => res.json()).then(res => {
      dispatch({type:feedbackAction.FEEDBACK_SET_MESSAGE_SNACKBAR, payload: 'Your booking has been created.'});
      dispatch({type:feedbackAction.FEEDBACK_SNACK_TYPE, payload: 'success'});
      dispatch({type:feedbackAction.FEEDBACK_OPEN_SNACKBAR});
      history.push('/app/bookings');
    });
  };

  return (
    <Card>
      <CardContent>
        <Typography>
          {capitalize(place.city.toLowerCase())}
        </Typography>
        <ul>
          {place.facilities.map(e =>(<li>{e}</li>))}
        </ul>
        <Typography>
          Number of guests: 
          {' '}
          {place.guests}
        </Typography>
      </CardContent>
      {(bookButton || edit) && (
      <CardActions className={styles.cardButton}>
        {bookButton && (
        <Button onClick={handleClick}>
          Book it!
        </Button>
      )}
        {edit && (
        <Button onClick={handleClickEdit}>
          Edit
        </Button>
      )}

      </CardActions>
)}
    </Card>
  )
};

export default PlaceCard;