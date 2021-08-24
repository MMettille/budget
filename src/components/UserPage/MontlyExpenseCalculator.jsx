import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function MonthlyExpenseCalculator() {
  const dispatch = useDispatch();
  const expense = useSelector((store) => store.expense);

  useEffect(() => {
    dispatch({ type: "FETCH_MONTHLY_EXPENSE" });
  }, []);

  console.log('expense...', expense)
  
  return (
    <div>
      <h1 className="center">Your Monthly Expenses:</h1>
    </div>
  );
}

export default MonthlyExpenseCalculator;
