import React, { useState } from 'react';
import {useSelector} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '15%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function Salary(props) {
  const classes = useStyles();
  const [salary, setSalary] = useState(60000)

  return (
    <div className="center">
        <FormControl variant="outlined" className={classes.margin}>
          <InputLabel htmlFor="new-amount">Salary (per year)</InputLabel>
          <OutlinedInput
            id="new-amount"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={125}
            type="number"
          />
        </FormControl>
    </div>
  );
}

export default Salary;
