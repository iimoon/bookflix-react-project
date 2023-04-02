import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import bookflix from './images/bookflix.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 4 }}>
                <AppBar position="static" sx={{ background: 'black' }}>
                    <Toolbar>
                        <Box
                            component="img"
                            sx={{ height: '50px', paddingTop: "0px" }}
                            alt="Logo"
                            src={bookflix}
                        />
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: -3 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Welcome to the world of fake books
                        </Typography>
                        <Button id="btn"color="inherit">
                            <Link to='/'>
                                View
                            </Link>
                        </Button>
                        <Button id="btn" color="inherit">
                            <Link to='/add'>
                                Add
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar