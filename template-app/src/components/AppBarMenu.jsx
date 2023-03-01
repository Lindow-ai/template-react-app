import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const AppBarMenu = ({link}) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Mon application
                    </Typography>
                    <Button color="inherit" component={link} to="/">Counter</Button>
                    <Button color="inherit" component={link} to="/datatable">Data Table</Button>
                    <Button color="inherit" component={link} to="/todolist">Todo List</Button>
                    <IconButton color="inherit">
                        <Brightness4Icon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AppBarMenu;