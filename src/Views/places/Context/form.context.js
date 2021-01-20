import React, {createContext, useContext} from 'react';
import {useFormReducer} from './form.reducer';

const FormContext = createContext();
export const FormContextProvider = ({children}) => {
  const [state, dispatch] = useFormReducer();
  return (
    <FormContext.Provider value={{state, dispatch}}>
      {children}
    </FormContext.Provider>
  )
};

export const useFormContext = () => {
  const {state, dispatch} = useContext(FormContext);
  return({state, dispatchForm: dispatch});
};

