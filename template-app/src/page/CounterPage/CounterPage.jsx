import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Définition des styles pour notre composant en utilisant la fonction
const useStyles = makeStyles((theme) => ({
    spaceButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
}));

// Définition du composant CounterPage
const CounterPage = () => {
  // Utilisation de la fonction useState pour créer une variable d'état "count" 
  const [count, setCount] = useState(0);

  console.log('count', count);

  // Fonction pour incrémenter la valeur de "count" de 1 appelé lorque on appuis sur +
  const incrementCount = () => {
    setCount(count + 1);
  };

  //... sur -
  const decrementCount = () => {
    setCount(count - 1);
  };


  // Utilisation de la fonction makeStyles pour générer des styles à partir des classes définies précédemment
  const classes = useStyles();

  // Affichage du contenu de notre composant
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
