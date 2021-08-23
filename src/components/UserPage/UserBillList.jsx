import React, { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import EditIcon from "@material-ui/icons/EditOutlined";
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
    width: 60
  },
}));

function UserBillList({ bill }) {
  // ⬇ What functions we need to use in this component
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isEditMode, setIsEditMode] = useState(false);
  console.log("item...", bill);


  const onToggleEditMode = (id) => {
    setIsEditMode(!isEditMode)
  };

  return (
    <div className="table-input">
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
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(bill)}
                    >
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
      </TableRow>
    </div>
  );
}

export default UserBillList;
