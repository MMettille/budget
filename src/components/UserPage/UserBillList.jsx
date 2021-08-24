import React, { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import EditIcon from "@material-ui/icons/EditOutlined";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectTableCell: {
    width: 60,
  },
  input: {
    width: 130,
    height: 40,
  },
}));

function UserBillList({ bill }) {
  // ⬇ What functions we need to use in this component
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isEditMode, setIsEditMode] = useState(false);
  const [toEdit, setToEdit] = useState(bill);

  const onToggleEditMode = (bill) => {
    setIsEditMode(!isEditMode);
  };

  const handleSubmit = () => {
    dispatch({ type: "EDIT_BILL", payload: toEdit });
    onToggleEditMode();
  };

  const handleDelete = () => {
      dispatch({ type: "DELETE_BILL", payload: bill })
  }
  
  return (
    <TableRow key={bill.id}>
      <TableCell className={classes.selectTableCell}>
        {isEditMode ? (
          <>
            <IconButton aria-label="done" onClick={handleSubmit}>
              <DoneAllIcon />
            </IconButton>
            <IconButton aria-label="revert" onClick={() => onRevert(bill)}>
              <RevertIcon />
            </IconButton>
          </>
        ) : (
          <IconButton
            aria-label="delete"
            onClick={() => onToggleEditMode(bill)}
          >
            <EditIcon />
          </IconButton>
        )}
      </TableCell>
      <TableCell align="left" className={classes.tableCell}>
        {isEditMode ? (
          <Input
            value={toEdit.bill_name}
            onChange={(event) =>
              setToEdit({ ...bill, bill_name: event.target.value })
            }
            className={classes.input}
          />
        ) : (
          bill.bill_name
        )}
      </TableCell>
      <TableCell align="left" className={classes.tableCell}>
        {isEditMode ? (
          <Input
            value={toEdit.amount}
            onChange={(event) =>
              setToEdit({ ...bill, amount: event.target.value })
            }
            className={classes.input}
          />
        ) : (
          bill.amount
        )}
      </TableCell>
      <TableCell>
      {isEditMode ? (
          <>
            <IconButton aria-label="done" onClick={handleDelete}>
              <DeleteOutlineIcon />
            </IconButton>
          </>
        ) : (
          <></>
        )}
      </TableCell>
    </TableRow>
  );
}

export default UserBillList;
