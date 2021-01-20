import React from 'react';
import {FeedbackContextProvider} from './feedback.context';

export const contextWrapper = Component => props => (
  <FeedbackContextProvider>
    <Component {...props} />
  </FeedbackContextProvider>
);
