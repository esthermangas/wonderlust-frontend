import React from 'react';
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const CustomSnackbar = props => {
  const {anchorOrigin, open, onClose, message, type} = props;
  return(
    <Snackbar open={open} anchorOrigin={anchorOrigin} onClose={onClose}>
      <MuiAlert severity={type}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomSnackbar;