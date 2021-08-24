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
        {isEditMode ? (
            <>
            <TableCell className={classes.selectTableCell}>
                <IconButton aria-label="done" onClick={handleSubmit}>
                    <DoneAllIcon />
                </IconButton>
                <IconButton aria-label="revert" onClick={onToggleEditMode}>
                    <RevertIcon />
                </IconButton>
            </TableCell>
            <TableCell align="left" className={classes.tableCell}>
                <Input
                value={toEdit.bill_name}
                onChange={(event) =>
                setToEdit({ ...bill, bill_name: event.target.value })
                }
                className={classes.input}
                />
            </TableCell>
            <TableCell align="left" className={classes.tableCell}>
                <Input
                value={toEdit.amount}
                onChange={(event) =>
                setToEdit({ ...bill, amount: event.target.value })
                }
                className={classes.input}
                />
            </TableCell>
            <TableCell align="left" className={classes.tableCell}>
            <IconButton aria-label="done" onClick={handleDelete}>
              <DeleteOutlineIcon />
            </IconButton>
            </TableCell>
            </>
        ) : (
            <>
            <TableCell className={classes.selectTableCell}>
                <IconButton
                aria-label="edit"
                onClick={() => onToggleEditMode(bill)}
                >
                    <EditIcon />
                </IconButton>
            </TableCell>
            <TableCell align="left" className={classes.tableCell}>
                {bill.bill_name}
            </TableCell>
            <TableCell align="left" className={classes.tableCell}>
                {bill.amount}
            </TableCell>
            <TableCell align="left" className={classes.tableCell}></TableCell>
            </>
        )}
    </TableRow>
  );
}

export default UserBillList;
