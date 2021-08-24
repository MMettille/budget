import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import BillTable from "./BillTable";
import "./UserPage.css";
import MonthlyExpenseCalculator from './MontlyExpenseCalculator'
import AddBill from './AddBill';

function Budget() {
  return (
    <div className="container">
      <MonthlyExpenseCalculator />
      <AddBill />
      <BillTable />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Budget;
