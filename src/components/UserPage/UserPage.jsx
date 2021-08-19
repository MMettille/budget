import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

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
  const bill = useSelector((store) => store.bill);
  //! Not sure why this is happening
  // ⬇ On page load, fetch the categories from the database
  useEffect(() => {
    dispatch({ type: "FETCH_BILL" });
  }, []);

  return (
    <div className="container">
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
