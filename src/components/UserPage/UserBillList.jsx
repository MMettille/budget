import React, { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function UserBillList({ item }) {
  // ⬇ What functions we need to use in this component
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log("item...", item);

  return (
    <div>
      <form>
        <FormControl variant="outlined" className={classes.margin}>
          <InputLabel htmlFor="new-amount">Bill</InputLabel>
          <OutlinedInput
            id="new-amount"
            value={item.bill_name}
            // onChange={(event) => setNewBill(event.target.value)}
            labelWidth={60}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.margin}>
          <InputLabel htmlFor="new-amount">Amount</InputLabel>
          <OutlinedInput
            id="new-amount"
            value={item.amount}
            // onChange={(event) => setNewAmount(event.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
            type="number"
          />
        </FormControl>
      </form>
    </div>
  );
}

export default UserBillList;
