import React from "react";
import CesiumMap from './CesiumMap';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const App = () =>{
    return (
        <>
            <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Cesium, Webpack, React 18, Babel, Material UI v5 Boilerplate
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
            <CesiumMap></CesiumMap>
        </>
    )
}

export default App
