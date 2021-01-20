import React from 'react';
import ListCard from '../../../Components/ListCard';

const HomeList = props => {
  const {elements} = props;
  return (
    <div>
      <ListCard elements={elements} type="place" bookButton  />
    </div>
  )
};

export default HomeList;