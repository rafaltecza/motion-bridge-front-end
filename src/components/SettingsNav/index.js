import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {CustomizedLinkButton, MenuLink} from "../Dropdown/Menu/MenuElements";

const SettingsNav = () => {

    return (
        <div>
                <Box sx={{ width: '100%'}}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <MenuLink to="/account-data">
                                <ListItem disablePadding>
                                    <CustomizedLinkButton >
                                        <ListItemIcon>
                                            <AccountCircleIcon />
                                        </ListItemIcon>
                                        Account Data
                                    </CustomizedLinkButton>
                                </ListItem>
                            </MenuLink>
                            <MenuLink to="/subscriptions">
                                <ListItem disablePadding>
                                    <CustomizedLinkButton >
                                        <ListItemIcon>
                                            <SubscriptionsIcon />
                                        </ListItemIcon>
                                        Subscriptions
                                    </CustomizedLinkButton>
                                </ListItem>
                            </MenuLink>
                            <MenuLink to="/settings/contact">
                                <ListItem disablePadding>
                                    <CustomizedLinkButton >
                                        <ListItemIcon>
                                            <ContactMailIcon />
                                        </ListItemIcon>
                                        Contact
                                    </CustomizedLinkButton>
                                </ListItem>
                            </MenuLink>
                            <MenuLink to="/faq">
                                <ListItem disablePadding>
                                    <CustomizedLinkButton >
                                        <ListItemIcon>
                                            <QuestionMarkIcon />
                                        </ListItemIcon>
                                        FAQ
                                    </CustomizedLinkButton>
                                </ListItem>
                            </MenuLink>
                        </List>
                    </nav>
                </Box>
        </div>
    );
}

export default SettingsNav;

