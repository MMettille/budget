import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const bill = (state = [], action) => {
  switch (action.type) {
    case 'SET_BILL':
        return action.payload;
    default:
      return state;
  }
};

const editBill = (state = {}, action) => {
    // ⬇ Identify which task the user would like to edit
    if(action.type === 'BILL_TO_EDIT'){
        console.log('BILL_TO_EDIT:', action.payload)
        return action.payload
    } else if(action.type === 'EDIT_ONCHANGE') {
        console.log('EDIT_ONCHANGE', action.payload)
        return {
        // spread: give me all of the object (...state)
        ...state,
        // change this one in particular
        [action.payload.property]: action.payload.value,
        }
    // ⬇ Clearing redux
    } else if(action.type === 'CLEAR_EDIT') {
        return { };
    }
    return state;
}

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  bill,
  editBill,
});
