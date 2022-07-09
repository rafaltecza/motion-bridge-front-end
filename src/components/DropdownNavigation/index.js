import * as React from 'react';
import {StyledMenu, SettingsLink, MenuLink, CustomizedLinkButton} from "./DropdownNavigationElements";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Settings = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <SettingsLink
                id="settings-link"
                onClick={handleClick}
            >
                <DehazeIcon />
            </SettingsLink>

            <StyledMenu
                id="settings-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <Box sx={{ width: '100%', maxWidth: 360 }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <MenuLink to="/owned-products">
                                <ListItem disablePadding>
                                    <CustomizedLinkButton onClick={handleClose}>
                                        <ListItemIcon>
                                            <PlayCircleIcon />
                                        </ListItemIcon>
                                        Owned Products
                                    </CustomizedLinkButton>
                                </ListItem>
                            </MenuLink>
                            <MenuLink to="/settings">
                                <ListItem disablePadding>
                                    <CustomizedLinkButton onClick={handleClose}>
                                        <ListItemIcon>
                                            <SettingsIcon />
                                        </ListItemIcon>
                                        Settings
                                    </CustomizedLinkButton>
                                </ListItem>
                            </MenuLink>
                            <MenuLink to="">
                                <ListItem disablePadding>
                                    <CustomizedLinkButton onClick={handleClose}>
                                        <ListItemIcon>
                                            <LogoutIcon />
                                        </ListItemIcon>
                                        Logout
                                    </CustomizedLinkButton>
                                </ListItem>
                            </MenuLink>
                            <MenuLink to="admin-panel">
                                <ListItem disablePadding>
                                    <CustomizedLinkButton onClick={handleClose}>
                                        <ListItemIcon>
                                            <AdminPanelSettingsIcon />
                                        </ListItemIcon>
                                        Admin Panel
                                    </CustomizedLinkButton>
                                </ListItem>
                            </MenuLink>
                        </List>
                    </nav>
                </Box>
            </StyledMenu>
        </div>
    );
}

export default Settings;
