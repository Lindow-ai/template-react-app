// Import des modules et composants nécessaires de React Router et Material-UI
import { Routes, Route, Link } from 'react-router-dom';
import AppBarMenu from '../components/AppBarMenu';
import { DisplayItemsProvider } from '../context/DisplayItemsContext';
import CounterPage from '../page/CounterPage';
import DataTablePage from '../page/DataTablePage';
import DataTableContextPageOne from '../page/DataTablePageContextOne';
import DataTableContextPageTwo from '../page/DataTableContextPageTwo';
import DataTableContextPageThree from '../page/DataTableContextPageThree';
import TodoListPage from '../page/TodoListPage';

const RoutesComponent = () => {
    return (
        <div>
            {/* Barre de navigation avec les boutons pour naviguer entre les pages */}
            <AppBarMenu link={Link} />
            <div style={{ marginTop: '80px' }}>
                <Routes>
                    {/* Route pour afficher la page Counter */}
                    <Route path="/" element={<CounterPage />} />
                    <Route 
                        path="/datatable" 
                        element={
                        <DisplayItemsProvider>
                            <DataTablePage />
                        </DisplayItemsProvider>
                        }/>
                    <Route 
                        path="/datable-context-1"
                        element={
                            <DisplayItemsProvider>
                                <DataTableContextPageOne />
                            </DisplayItemsProvider>
                        }
                    />
                    <Route
                        path="/datable-context-2"
                        element={
                            <DisplayItemsProvider>
                                <DataTableContextPageTwo />
                            </DisplayItemsProvider>
                        }
                    />
                    <Route 
                        path='/datable-context-3'
                        element={
                            <DisplayItemsProvider>
                                <DataTableContextPageThree />
                            </DisplayItemsProvider>
                        }
                    />
                    <Route path="/todolist" element={<TodoListPage />} />
                </Routes>
            </div>
        </div>
    )
}

// Export du composant RoutesComponent pour pouvoir l'utiliser dans d'autres fichiers
export default RoutesComponent;