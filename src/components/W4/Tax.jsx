import React, { useState } from "react";
import { useSelector } from "react-redux";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '15%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Tax() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const classes = useStyles();
  const [maritalStatus, setMaritalStatus] = useState("single");
  const [dependents, setDependents] = useState(1);
  const [allowances, setAllowances] = useState(1);

  console.log(maritalStatus);
  return (
    <div className="container">
      <h3>Step 1: Marital Status</h3>
      <form>
        <FormControl component="fieldset">
          <FormLabel component="legend">Marital Status</FormLabel>
          <RadioGroup
            aria-label="single"
            row
            name="single"
            value={maritalStatus}
            onChange={(event) => setMaritalStatus(event.target.value)}
          >
            <FormControlLabel
              value="single"
              control={<Radio />}
              label="Single"
            />
            <FormControlLabel
              value="married"
              control={<Radio />}
              label="Married"
            />
          </RadioGroup>
        </FormControl>
        <h3>Step 2: Claim Dependents</h3>
        <p>If your total income will be $200,000 or less ($400,000 if married filing jointly):</p>
      <FormControl variant="outlined" className={classes.margin}>
          <InputLabel htmlFor="new-amount">Number of dependents</InputLabel>
          <OutlinedInput
            id="new-amount"
            value={dependents}
            onChange={(event) => setDependents(event.target.value)}
            labelWidth={175}
            type="number"
          />
        </FormControl>
      <h3>State of Minnesota</h3>
      <FormControl variant="outlined" className={classes.margin}>
          <InputLabel htmlFor="new-amount">Allowances</InputLabel>
          <OutlinedInput
            id="new-amount"
            value={allowances}
            onChange={(event) => setAllowances(event.target.value)}
            labelWidth={60}
            type="number"
          />
        </FormControl>
      </form>
    </div>
  );
}

export default Tax;
