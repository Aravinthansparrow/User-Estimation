import React,{useState} from 'react'
import Logo from "../assets/logo-ig.png"
import {AppBar, Toolbar, Typography, Avatar, Popover, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import "../index.css"


const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isPopoverOpen = Boolean(anchorEl);

    const popoverId = isPopoverOpen ? 'profile-popover' : undefined;

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <AppBar position="static" className='header'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <img src={Logo} alt="" />
                    </Typography>
                    <Avatar
                        alt="Profile Avatar"
                        src="/path/to/avatar.jpg"
                        sx={{ width: 50, height: 50, borderRadius: '50%', cursor: 'pointer' }}
                        onClick={handleAvatarClick}
                    />
                    <Popover
                        id={popoverId}
                        open={isPopoverOpen}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                    <Box sx={{ p: 2,display: 'flex',flexDirection:'column',alignItems:"start", }}>
                        <Link to="/" className ="profile" onClick={handleClose}>
                        Logout
                        </Link>
                        <Link to="/ChangePassword" className ="profile" onClick={handleClose}>
                        Change password
                        </Link>
                    </Box>
                    </Popover>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
