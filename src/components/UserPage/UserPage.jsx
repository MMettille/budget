import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function UserPage() {
  // ⬇ What functions we need to use in this component
  const dispatch = useDispatch();
  const classes = useStyles();
  // ⬇ Variables we need to declare and use in this component
  const bills = useSelector((store) => store.bills);
  // ⬇ On page load, fetch the categories from the database
  useEffect(() => {
    dispatch({ type: "FETCH_BILL" });
  }, []);

  return (
    <div className="container">
      <form action="">
      <FormControl className={classes.margin} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-amount">Mortgage/Rent</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={120}
          />
      </FormControl><br />
      </form>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
