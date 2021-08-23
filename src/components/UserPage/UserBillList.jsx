import React, { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function UserBillList({ bill }) {
  // ⬇ What functions we need to use in this component
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log("item...", bill);

  return (
    <div className="table-input">
      <TableRow key={bill.id}>
        <TableCell component="th" scope="row">
          <input
            type="text"
            value={bill.bill_name}
            // onChange={(event) => setNewBill(event.target.value)}
          />
        </TableCell>
        <TableCell align="right">
          <input
            type="text"
            value={bill.amount}
            // onChange={(event) => setNewAmount(event.target.value)}
          />
        </TableCell>
      </TableRow>
    </div>
  );
}

export default UserBillList;
