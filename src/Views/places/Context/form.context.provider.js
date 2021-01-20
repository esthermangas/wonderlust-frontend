import React from 'react';
import {FormContextProvider} from './form.context';

export const contextWrapper = Component => props => (
  <FormContextProvider>
    <Component {...props}/>
  </FormContextProvider>
);
