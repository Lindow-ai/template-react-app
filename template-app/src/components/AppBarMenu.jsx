import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useState } from 'react';

const AppBarMenu = ({link}) => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenu = (event) => {
        setOpenMenu(event.currentTarget);
    }

    const handleClose = (event) => {
        setOpenMenu(null);
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Mon application
                    </Typography>
                    <Button color="inherit" component={link} to="/">Counter</Button>
                    <div>
                        <Button color="inherit" to="/datatable" onClick={handleMenu}>Data Table</Button>
                        <Menu 
                          id="menu-data-table"
                          anchorEl={openMenu}
                          open={Boolean(openMenu)}
                          onClose={handleClose}
                        >
                            <MenuItem component={link} to="/datatable">Data Table</MenuItem>
                            <MenuItem component={link} to="/datable-context-1">Data Table context exemple 1</MenuItem>
                            <MenuItem component={link} to="/datable-context-2">Data Table context exemple 2</MenuItem>
                        </Menu>
                    </div>
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