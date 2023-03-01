// Import des modules et composants nécessaires de React Router et Material-UI
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CounterPage from '../page/CounterPage';
import DataTablePage from '../page/DataTablePage';
import TodoListPage from '../page/TodoListPage';

const RoutesComponent = () => {
    return (
        <div>
            <AppBar>
                {/* Barre de navigation avec les boutons pour naviguer entre les pages */}
                <Toolbar>
                    <Typography>
                        Mon application
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Counter</Button>
                    <Button color="inherit" component={Link} to="/datatable">Data Table</Button>
                    <Button color="inherit" component={Link} to="/todolist">Todo List</Button>
                </Toolbar>
            </AppBar>
            <div style={{ marginTop: '80px' }}>
                <Routes>
                    {/* Route pour afficher la page Counter */}
                    <Route path="/" element={<CounterPage />} />
                    <Route path="/datatable" element={<DataTablePage />}/>
                    <Route path="/todolist" element={<TodoListPage />} />
                </Routes>
            </div>
        </div>
    )
}

// Export du composant RoutesComponent pour pouvoir l'utiliser dans d'autres fichiers
export default RoutesComponent;