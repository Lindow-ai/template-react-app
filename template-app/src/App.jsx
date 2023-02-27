import './App.css';
import { BrowserRouter } from 'react-router-dom' // Import du module BrowserRouter afin de pouvoir l'utiliser notre système de composant
import RoutesComponent from './navigation/RoutesComponent'; // Import de notre composant afin de pouvoir l'utiliser dans notre jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722',
    },
  },
});


const App = () => {
  

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
