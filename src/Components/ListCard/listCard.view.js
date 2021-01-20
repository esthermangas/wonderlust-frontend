import React from 'react';
import { Grid } from '@material-ui/core';
import BookingCard from '../BookingCard';
import PlaceCard from '../PlacesCard';

const ListCard = props => {
  const {elements, type, bookButton, edit} = props;
  return (
    <Grid container direction='row' spacing={2} justify='center'>
      {elements.map(element => {
        return (
          <Grid item xs={3}>
            {type==='place' && (<PlaceCard place={element} bookButton={bookButton} edit={edit}/>)}
            {type==='booking' && (<BookingCard booking={element} />)}
          </Grid>
        )
      })}
    </Grid>
  )
};

export default ListCard;