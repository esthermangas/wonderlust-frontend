import React, { useState } from 'react';
import Container from '@material-ui/core/Container';


const Favourites = () => {
  const [bookings, setBookings] = useState([]);
  fetch('http://localhost/api/booking/', {
    headers: {
      'authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }).then(res =>res.json()).then(res=>{
      setBookings(res);
  });
  return(
    <div>
      <Container>
        {bookings.map(booking => {
          return <div>{booking}</div>
        })}
      </Container>
    </div>
  )
};


export default Favourites;
