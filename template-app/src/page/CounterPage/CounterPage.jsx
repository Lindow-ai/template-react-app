import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    spaceButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
}));

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };


  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Page du compteur
      </Typography>
      <div>
        <Typography variant="h5" gutterBottom>
          {count}
        </Typography>
    </div>
      <div className={classes.spaceButton}>
        <Button color='success' variant="contained" onClick={incrementCount}>
          +
        </Button>
        <Button color='error' variant="contained" onClick={decrementCount}>
          -
        </Button>
      </div>
    </div>
  );
};

export default CounterPage;
