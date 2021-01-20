import React from 'react';
import {Typography, Card, CardContent} from '@material-ui/core';
import {format} from 'date-fns';

const BookingCard = props => {
  const {booking} = props;

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  return (
    <Card>
      <CardContent>
        <Typography>
          {capitalize(booking.place_id.city.toLowerCase())}
        </Typography>
        <Typography>
          {format(new Date(booking.startDate), 'dd-MM-yyyy')}
        </Typography>
        <Typography>
          {format(new Date(booking.endDate), 'dd-MM-yyyy')}
        </Typography>
        <Typography>
          Number of guests: {booking.guests}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default BookingCard;