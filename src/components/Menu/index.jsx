import List from "@mui/material/List";
import {Button, Divider, ListItemButton, TextField} from "@mui/material";
import {CustomizedLinkButton, MenuLink} from "../Dropdown/Menu/MenuElements";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Box from "@mui/material/Box";
import * as React from "react";
import {MenuBox} from "./MenuElements";
import Collapse from "@mui/material/Collapse";

const Menu = ({content}) => {

    const [open, setOpen] = React.useState(content.map(() => false));

    const handleCollapse = (index) => {
        const newOpen = [...open];
        newOpen[index] = !newOpen[index];
        setOpen(newOpen);
    }

    return (
        <MenuBox sx={{ width: '100%'}}>
            <nav aria-label="main mailbox folders">
                <List className={"mx-2"}>
                    {content.map((item, index) => {
                        return (
                            <>
                                {item.line ? (<Divider/>) : null}

                                {item?.page ? (
                                    <MenuLink to={item?.page}>
                                        <ListItem className={item.classes} style={{backgroundColor: item.color}} button key={index}>
                                            {item?.icon &&
                                                <ListItemIcon>{item.icon()}</ListItemIcon>
                                            }
                                            <ListItemText primary={item.name} />
                                            { item?.rightComponent }
                                            { item?.collapseText && <Button variant="outlined" value={open[index]} onClick={() => handleCollapse(index)}>{open[index] ? '-' : '+'}</Button>}
                                        </ListItem>
                                    </MenuLink>

                                ) : (
                                    <>
                                        <ListItem className={item.classes} style={{backgroundColor: item.color}} button key={index}>
                                        { item?.icon && <ListItemIcon>{item.icon()}</ListItemIcon> }
                                        <ListItemText primary={item.name} />
                                            {item?.rightComponent}
                                            {item?.collapseText && <button className={"button-border-red bg-transparent"} variant="outlined" value={open[index]} onClick={() => handleCollapse(index)}>{open[index] ? '-' : '+'}</button>}
                                        </ListItem>
                                    </>
                                )}

                                { item?.collapse && (
                                    <Collapse className={"mb-3"} in={open[index]} timeout="auto" unmountOnExit>
                                        {item.collapse}
                                    </Collapse>
                                ) }
                            </>
                        )}
                    )}
                </List>
            </nav>
        </MenuBox>
    );
}

export default Menu;