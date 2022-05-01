import * as React from 'react';
import {StyledMenu, SettingsLink, MenuLink} from "./SettingsElements";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

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
                Settings
            </SettingsLink>

            <StyledMenu
                id="settings-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <MenuLink onClick={handleClose} to="/account-data">Account Data</MenuLink>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SubscriptionsIcon />
                                    </ListItemIcon>
                                    <MenuLink onClick={handleClose} to="/subscriptions">Subscriptions</MenuLink>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ContactMailIcon />
                                    </ListItemIcon>
                                    <MenuLink onClick={handleClose} to="/contact">Contact</MenuLink>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemIcon>
                                        <QuestionMarkIcon />
                                    </ListItemIcon>
                                    <MenuLink onClick={handleClose} to="/faq">FAQ</MenuLink>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <RemoveCircleOutlineIcon />
                                    </ListItemIcon>
                                    <MenuLink onClick={handleClose} to="/delete-account">Delete Account</MenuLink>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Box>
            </StyledMenu>
        </div>
    );
}

export default Settings;

