import * as React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider } from '@mui/material';
import {alpha, ListItemText} from "@material-ui/core";
import {MenuLink, SettingsLink, StyledMenu} from "./MenuElements";
const DropdownMenu = ({icon, name, content}) => {
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
                <Box mr={2}>
                    { icon() }
                </Box>
                <Box className={"text-nowrap"}>
                    { name }
                </Box>

            </SettingsLink>

            <StyledMenu
                id="settings-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                <Box sx={{ width: '100%', maxWidth: 360 }}>
                    <nav aria-label="main mailbox folders">
                        <List className={"mx-2"}>
                            {content.map((item, index) => {
                                return (
                                    <>
                                        {item.line ? (<Divider/>) : null}
                                        <MenuLink to={item.page}>
                                            <ListItem className={item.classes} style={{backgroundColor: item.color}} button key={index}>
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText primary={item.name} />
                                            </ListItem>
                                        </MenuLink>
                                    </>
                                )}
                            )}
                        </List>
                    </nav>
                </Box>
            </StyledMenu>
        </div>
    );
}

export default DropdownMenu;