import React, {createContext, useContext} from 'react';
import {useHomeReducer} from './home.reducer';

const HomeContext = createContext();
export const HomeContextProvider = ({children}) => {
  const [state, dispatch] = useHomeReducer();
  return (
    <HomeContext.Provider value={{state, dispatch}}>
      {children}
    </HomeContext.Provider>
  )
};

export const useHomeContext = () => {
  const {state, dispatch} = useContext(HomeContext);
  return({state, dispatch});
};

