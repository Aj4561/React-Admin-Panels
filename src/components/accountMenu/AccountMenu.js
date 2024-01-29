import React, { useState, useEffect, useRef } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; //Profile Icon 
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // Add Another Account Icon
import Divider from '@mui/material/Divider';  // For dividing purpose
import SettingsIcon from '@mui/icons-material/Settings'; // Setting Icon 
import LogoutIcon from '@mui/icons-material/Logout'; //Logout Icon
import { Link } from 'react-router-dom';

const MenuExample = ({ isOpen, onClose, setIsLoggedIn }) => {
    const [menuOpen, setMenuOpen] = useState(isOpen);
    const anchorRef = useRef(null);

    useEffect(() => {
        // Update the internal state when the prop changes
        setMenuOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setMenuOpen(false);
        onClose(); // Call onClose prop to notify the parent component
    };

    const logout = () => {
        localStorage.setItem('isLogIn', 'false')
        setIsLoggedIn(false)
    }

    const menuStyles = {
        // Add your custom styles here
        marginTop: '10px',
        // marginLeft: '1750px',
        transform: 'translateX(calc(100% - 260px))',
        // ... other styles
    };

    // Render the Menu only when it should be open
    return (
        <div ref={anchorRef}>
            {menuOpen && (
                <div>
                    <Menu
                        anchorEl={anchorRef.current} // Use the real DOM element as the anchor
                        open={menuOpen}
                        onClose={handleClose}
                        style={menuStyles} // Apply custom styles
                    >
                        <MenuItem onClick={handleClose}>
                            <IconButton size="small">
                                <AccountCircleIcon fontSize="small" />
                            </IconButton>Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <IconButton size='small'>
                                <PersonAddIcon fontSize='small' />
                            </IconButton>Add another account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <IconButton size='small'>
                                <SettingsIcon fontSize='small'>

                                </SettingsIcon>
                            </IconButton>Setting
                        </MenuItem>
                        <MenuItem onClick={logout}>
                        <Link to='/login'>
                            <IconButton size='small'>
                                <LogoutIcon fontSize='small'></LogoutIcon>
                            </IconButton>Logout
                        </Link>
                        </MenuItem>
                    </Menu>
                </div>
            )}
        </div>
    );
};

export default MenuExample;
