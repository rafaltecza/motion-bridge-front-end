import * as React from 'react';
import {StyledMenu, SettingsLink, MenuLink, CustomizedLinkButton} from "../DropdownNavigation/DropdownNavigationElements";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const AdminNav = () => {

    return (
        <div>
            <Box sx={{ width: '100%'}}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <MenuLink to="/admin-products">
                            <ListItem disablePadding>
                                <CustomizedLinkButton >
                                    <ListItemIcon>
                                        <SubscriptionsIcon />
                                    </ListItemIcon>
                                    Products Management
                                </CustomizedLinkButton>
                            </ListItem>
                        </MenuLink>
                        <MenuLink to="/admin-users">
                            <ListItem disablePadding>
                                <CustomizedLinkButton >
                                    <ListItemIcon>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    Users Management
                                </CustomizedLinkButton>
                            </ListItem>
                        </MenuLink>
                    </List>
                </nav>
            </Box>
        </div>
    );
}

export default AdminNav;

