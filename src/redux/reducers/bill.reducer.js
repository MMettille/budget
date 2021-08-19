import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const bill = (state = {}, action) => {
  switch (action.type) {
    case 'SET_BILL':
        return action.payload[0];
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  bill,
});
