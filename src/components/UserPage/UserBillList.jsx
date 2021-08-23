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
  const [editThis, setEditThis] = useState('');
    const billToEdit = useSelector(store => store.billToEdit)
  const onToggleEditMode = (bill) => {
    setIsEditMode(!isEditMode);
    dispatch({
        type: 'BILL_TO_EDIT',
        payload: bill
    })
  };

  const CustomTableCell = ({ row, name, type, onChange }) => {
    return (
      <TableCell align="left" className={classes.tableCell}>
        {isEditMode ? (
          <Input
            value={name}
            name={name}
            onChange={(event) =>
                dispatch({
                  type: "EDIT_ONCHANGE",
                  payload: {
                    property: type,
                    value: event.target.value,
                  },
                })
              }
            className={classes.input}
          />
        ) : (
          name
        )}
      </TableCell>
    );
  };

  const handleChange = (e, bill) => {
    console.log("changing...", bill);

  };

  return (
    <TableRow key={bill.id}>
      <TableCell className={classes.selectTableCell}>
        {isEditMode ? (
          <>
            <IconButton
              aria-label="done"
              onClick={() => onToggleEditMode(bill)}
            >
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
      <CustomTableCell name={bill.bill_name} type="bill_name" />
      <CustomTableCell name={bill.amount} type="amount"/>
    </TableRow>
  );
}

export default UserBillList;
