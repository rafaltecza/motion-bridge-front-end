import * as React from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import {CustomizedLinkButton, MenuLink} from "../Dropdown/Menu/MenuElements";
import {ListItem, ListItemIcon} from "@material-ui/core";


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
                                        {/*<SubscriptionsIcon />*/}
                                    </ListItemIcon>
                                    Products Management
                                </CustomizedLinkButton>
                            </ListItem>
                        </MenuLink>
                        <MenuLink to="/admin-users">
                            <ListItem disablePadding>
                                <CustomizedLinkButton >
                                    <ListItemIcon>
                                        {/*<AccountCircleIcon />*/}
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

