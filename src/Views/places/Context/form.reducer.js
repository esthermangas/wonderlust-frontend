import { useReducer } from 'react';
import { formAction } from './form.actions';

const initialState = {
  openModal: false,
  places: [],
  modalData: {city: '', guests: 0, facilities: '', description: ''},
  mode: 'add',
};

const formReducer = (state, action) => {
  const newState = {...state};
  switch (action.type) {
    case formAction.FORM_SET_OPEN_MODAL:
      newState.openModal = action.payload;
      return newState;
    case formAction.FORM_SET_MODAL_DATA:
      newState.modalData = action.payload;
      return newState;
    case formAction.FORM_RESET_MODAL_DATA:
      newState.modalData = {...initialState.modalData};
      return newState;
    case formAction.FORM_SET_PLACES:
      newState.places = action.payload;
      return newState;
    case formAction.FORM_SET_MODE:
      newState.mode = action.payload;
      return newState;
    default:
      return newState;
  }
};

export const useFormReducer = () => useReducer(formReducer, {...initialState});

