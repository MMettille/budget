import React, { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

import UserBillList from './UserBillList'
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function BillTable({ item }) {
  // ⬇ What functions we need to use in this component
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log("item...", item);

  return (
    <div>
      {item.map((bill) => {
        return <UserBillList key={item.id} bill={bill} />;
      })}
    </div>
  );
}

export default BillTable;
