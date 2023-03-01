import './App.css';
import { BrowserRouter } from 'react-router-dom' // Import du module BrowserRouter afin de pouvoir l'utiliser notre système de composant
import RoutesComponent from './navigation/RoutesComponent'; // Import de notre composant afin de pouvoir l'utiliser dans notre jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Définition du thème de l'application
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722',
    },
  },
});

// Définition du composant App
const App = () => {
   // Retourne le jsx de l'application, encapsulée dans le composant BrowserRouter pour pouvoir utiliser le système de routage de React Router,
  // et le composant ThemeProvider pour appliquer le thème de l'application à tous les composants enfants.
  return (
    <div className="App"> {/* Encapsuler l'application dans le composant RouteComponent pour ensuite utiliser Le système de route de React Router */}
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RoutesComponent /> 
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
