import React, {useState} from 'react';
import { Container } from '@material-ui/core';
import styles from './home.module.css';
import HomeForm from './HomeForm';
import HomeList from './HomeList';
import { useHomeContext } from './Context/home.context';
import { useFeedbackContext } from '../../Components/appBar/Context/feedback.context';
import { feedbackAction } from '../../Components/appBar/Context/feedback.actions';

const Home = () => {
  const [places, setPlaces] = useState([]);
  const {state} = useHomeContext();
  const {dispatch} = useFeedbackContext();

  const handleSearch = () => {
    fetch('http://localhost:3001/api/search/places',
      {
        method: 'POST',
        body: JSON.stringify(state.formData),
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        mode: 'cors'
      }).then(res =>res.json()).then(res=>{
        if(res.length===0){
          dispatch({type:feedbackAction.FEEDBACK_SET_MESSAGE_SNACKBAR, payload: 'There are no places available for the data introduced.'});
          dispatch({type:feedbackAction.FEEDBACK_SNACK_TYPE, payload: 'info'});
          dispatch({type:feedbackAction.FEEDBACK_OPEN_SNACKBAR});
        }
        setPlaces(res);
      });
  };
  return (
    <Container className={styles.containerPrincipal}>
      {
        places.length===0 && <HomeForm onClickSearch={handleSearch} />
      }
      {
        places.length>0 && <HomeList elements={places} />
      }
    </Container>
  )
};


export default Home;
