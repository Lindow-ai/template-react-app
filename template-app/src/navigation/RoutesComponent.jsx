import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CounterPage from '../page/CounterPage';
import DataTablePage from '../page/DataTablePage';
import TodoListPage from '../page/TodoListPage';

const RoutesComponent = () => {
    return (
        <div>
            <AppBar>
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
                    <Route path="/" element={<CounterPage />} />
                    <Route path="/datatable" element={<DataTablePage />}/>
                    <Route path="/todolist" element={<TodoListPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default RoutesComponent;