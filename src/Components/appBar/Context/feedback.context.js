import React, {createContext, useContext} from 'react';
import {useFeedbackReducer} from './feedback.reducer';

const FeedbackContext = createContext();
export const FeedbackContextProvider = ({children}) => {
  const [state, dispatch] = useFeedbackReducer();
  return (
    <FeedbackContext.Provider value={{state, dispatch}}>
      {children}
    </FeedbackContext.Provider>
  )
};

export const useFeedbackContext = () => {
  const {state, dispatch} = useContext(FeedbackContext);
  return({state, dispatch});
};

