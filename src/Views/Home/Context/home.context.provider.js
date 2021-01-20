import React from 'react';
import {HomeContextProvider} from './home.context';

export const contextWrapper = Component => props => (
  <HomeContextProvider>
    <Component {...props} />
  </HomeContextProvider>
);
