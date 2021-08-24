import React, { useEffect, useState } from "react";
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

function TemplateFunction(props) {
  // ⬇ What functions we need to use in this component
  const dispatch = useDispatch();
  const classes = useStyles();
  const [newBill, setNewBill] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleSubmit = (event) => {
    // ⬇ Prevent the page from reloading
    event.preventDefault();
    // ⬇ Dispatch the new task to redux
    dispatch({
      type: "ADD_NEW_BILL",
      payload: {
        bill_name: newBill,
        amount: newAmount,
      },
    });
    // ⬇ Reset the variables to an empty string
    setNewBill("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <div className="form center">
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined" className={classes.margin}>
          <InputLabel htmlFor="new-amount">Bill</InputLabel>
          <OutlinedInput
            id="new-amount"
            value={newBill}
            onChange={(event) => setNewBill(event.target.value)}
            labelWidth={60}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.margin}>
          <InputLabel htmlFor="new-amount">Amount</InputLabel>
          <OutlinedInput
            id="new-amount"
            value={newAmount}
            onChange={(event) => setNewAmount(event.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
            type="number"
          />
        </FormControl>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default TemplateFunction;
