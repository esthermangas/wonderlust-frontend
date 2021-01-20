import React from 'react';
import {Route, useHistory} from 'react-router-dom';
import {Drawer, List, ListItem, Button} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ApartmentIcon from '@material-ui/icons/Apartment';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import Home from '../../Views/Home';
import Favourites from '../../Views/Favourites';
import MyPlaces from '../../Views/places';
import Booking from '../../Views/Bookings';
import styles from './appBar.module.css';
import { useFeedbackContext } from './Context/feedback.context';
import { feedbackAction } from './Context/feedback.actions';
import CustomSnackbar from '../customSnackbar';


const AppBar = (props) => {
  const { history } = props;
  const historyHook = useHistory();
  const {state, dispatch} = useFeedbackContext();
  const handleClose = () => {
    dispatch({type: feedbackAction.FEEDBACK_CLOSE_SNACKBAR})
  };
  const goTo = (route) => {
    history.push(route);
  };
  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    historyHook.push('/signup');
  }
  return (
    <div className={styles.root}>
      <div>
        <Drawer
          className={styles.drawer}
          variant="permanent"
          anchor="left"
          classes={{
            paper: styles.drawerPaper,
          }}
        >
          <List className={styles.iconsList}>
            <div className={styles.button}>
              <Button variant="contained" color="secondary" onClick={handleLogOut} >
                Log Out
              </Button>
            </div>
            <ListItem className={styles.icon} onClick={() => goTo("/app/home")}>
                <HomeIcon fontSize='large' />
            </ListItem>
            <ListItem className={styles.icon} onClick={() => goTo("/app/favourites")}>
              <FavoriteIcon fontSize='large'  />
            </ListItem>
            <ListItem className={styles.icon} onClick={() => goTo("/app/bookings")}>
              <AirlineSeatIndividualSuiteIcon fontSize='large'  />
            </ListItem>
            <ListItem className={styles.icon} >
              <ApartmentIcon fontSize='large' onClick={() => goTo("/app/myplaces")} />
            </ListItem>
          </List>
        </Drawer>
      </div>
      <main className={styles.main}>
        <Route exact path={`${props.match.path}/home`} component={Home} />
        <Route exact path={`${props.match.path}/favourites`} component={Favourites} />
        <Route exact path={`${props.match.path}/myplaces`} component={MyPlaces} />
        <Route exact path={`${props.match.path}/bookings`} component={Booking} />

        <CustomSnackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={state.snackOpen}
          onClose={handleClose}
          message={state.snackMessage}
          type={state.snackType}
        />
      </main>
    </div>
  );
};

export default AppBar;
