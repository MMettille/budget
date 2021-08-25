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
import InputAdornment from "@material-ui/core/InputAdornment";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

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

function Tax() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const classes = useStyles();
  const [maritalStatus, setMaritalStatus] = useState("single");
  const [dependents, setDependents] = useState(1);
  const [otherDependents, setOtherDependents] = useState(1);
  const [allowances, setAllowances] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="container tax-box">
      <h3>Federal</h3>
      <h5>Marital Status</h5>
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
        <h5>Claim Dependents</h5>
      <FormControl variant="outlined" className={classes.margin}>
          <InputLabel htmlFor="new-amount">Dependents</InputLabel>
          <OutlinedInput
            id="new-amount"
            value={dependents}
            onChange={(event) => setDependents(event.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={125}
            type="number"
            onClick={(event) => setAnchorEl(event.currentTarget)}
          />
        </FormControl>
       
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
        Enter your annual estimated child tax credit.
        This is typically $2,000 for each of your of children under age 17 that are your dependents.
        The IRS instructions are to include this credit only if your income is $200,000 or less ($400,000 or less if married filing jointly).
        If you have a spouse that works or have two jobs you should only claim these credits with one employer/paycheck.
        </Typography>
      </Popover>

      <FormControl variant="outlined" className={classes.margin}>
          <InputLabel htmlFor="new-amount">Other Dependents</InputLabel>
          <OutlinedInput
            id="new-amount"
            value={otherDependents}
            onChange={(event) => setOtherDependents(event.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={125}
            type="number"
            onClick={(event) => setAnchorEl(event.currentTarget)}
          />
        </FormControl>
       
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
        Enter your annual estimated credit for other dependents.
        This is typically $500 for each dependent that qualifies. Do not include children under age 17. 
        The IRS instructions are to include this credit only if your income is $200,000 or less ($400,000 or less if married filing jointly). 
        If you have a spouse that works or have two jobs you should only claim these credits with one employer/paycheck.
        </Typography>
      </Popover>

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
