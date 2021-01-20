import React, { useEffect, useState } from 'react';
import {Container, Typography} from '@material-ui/core';
import styles from './booking.module.css'
import ListCard from '../../Components/ListCard';

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/api/booking', {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(res =>res.json()).then(res=>{
      setBookings(res);
    });
  }, []);
  return(
    <div>
      <Container>
        <Typography className={styles.title} variant="h5" align='center'>Your Booking list</Typography>
        <ListCard elements={bookings} type="booking" />
      </Container>
    </div>
  )
};

export default Booking;
