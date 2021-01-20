import { useReducer } from 'react';
import {homeAction} from './home.actions';

const initialState = {
  formData: {where: '',checkin: new Date(), checkout: new Date(), guests: 0}
};

const homeReducer = (state, action) => {
  const newState = {...state};
  switch (action.type) {
    case homeAction.HOME_SET_DATOS:
      newState.formData = {...state.formData, ...action.payload};
      return newState;
    default:
      return newState;
  }
};

export const useHomeReducer = () => useReducer(homeReducer, {...initialState});

