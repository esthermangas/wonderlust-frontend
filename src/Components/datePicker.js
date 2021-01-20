import React from 'react';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';



const DatePicker = props => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker {...props} />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;