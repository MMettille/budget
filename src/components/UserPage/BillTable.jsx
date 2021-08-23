import React, { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import UserBillList from "./UserBillList";
const useStyles = makeStyles({
  table: {
    maxWidth: 700,
  },
  tableCell: {
    width: 130,
    height: 40,
  },
});

function BillTable({ item }) {
  // ⬇ What functions we need to use in this component
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log("item...", item);

  return (
    <div>
      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" />
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item.map((bill) => {
              return <UserBillList key={item.id} bill={bill} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default BillTable;
