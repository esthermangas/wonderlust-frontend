import { useReducer } from 'react';
import { feedbackAction } from './feedback.actions';

const initialState = {
  snackOpen: false,
  snackMessage: '',
  snackType: 'success'
};

const feedbackReducer = (state, action) => {
  const newState = {...state};
  switch (action.type) {
    case feedbackAction.FEEDBACK_OPEN_SNACKBAR:
      newState.snackOpen = true;
      return newState;
    case feedbackAction.FEEDBACK_CLOSE_SNACKBAR:
      newState.snackOpen = false;
      return newState;
    case feedbackAction.FEEDBACK_SET_MESSAGE_SNACKBAR:
      newState.snackMessage = action.payload;
      return newState;
    case feedbackAction.FEEDBACK_SNACK_TYPE:
      newState.snackType = action.payload;
      return newState;
    default:
      return newState;
  }
};

export const useFeedbackReducer = () => useReducer(feedbackReducer, {...initialState});

