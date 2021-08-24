import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function MonthlyExpenseCalculator() {
  const dispatch = useDispatch();
  const item = useSelector((store) => store.bill);
  const expense = item.expense.total

  useEffect(() => {
    dispatch({ type: "FETCH_MONTHLY_EXPENSE" });
  }, []);

  return (
    <div>
      <h1 className="center">Your Monthly Expenses: ${expense}</h1>
    </div>
  );
}

export default MonthlyExpenseCalculator;
