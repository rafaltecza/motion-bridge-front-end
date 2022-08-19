import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavLogo} from "./NavbarElements";
import AlertArea from "../Alert";
import DropdownMenu from "../Dropdown/Menu";
import Avatar from "../User/Avatar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Inventory from "../Inventory";

const Navbar = () => {

    const userName = "User Tech"
    const AvatarElement = () => <Avatar /*alt="Cindy Baker"*/ /*src="logo192.png"*/ name={userName} classes={"small shadow"}/>


    return (
        <>
            <Nav>
                <NavLink to="/">
                    <NavLogo src={"/images/default/motion-bridge-logo.svg"} alt={"logo"}/>
                </NavLink>
                <Bars/>
                <NavMenu className={"w-100"}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink className={"ms-auto me-3"} to="/inventory"><Inventory/></NavLink>
                </NavMenu>
                <NavMenu className={"ms-auto"}>

                { localStorage.getItem('sessionToken') === undefined ?
                    (
                        <>
                            <NavLink className={"button-border-red me-0"} to="/sign-in">Sign In</NavLink>
                            <NavLink className={"button-border-red me-0"} to="/sign-up">Sign Up</NavLink>
                        </>
                    ) : (
                        <DropdownMenu icon={AvatarElement} name={userName} content={
                            [
                                {
                                    name: "Admin panel",
                                    icon: <AdminPanelSettingsIcon/>,
                                    page: "/admin",
                                    color: 'rgba(255,0,0,0.1)',
                                    classes: "rounded-3"
                                },
                                {
                                    name: "Inventory",
                                    icon: <InventoryIcon/>,
                                    page: "/inventory"
                                },
                                {
                                    name: "Settings",
                                    icon: <SettingsIcon/>,
                                    page: "/settings"
                                },
                                {
                                    name: "Logout",
                                    icon: <LogoutIcon/>,
                                    page: "/logout",
                                    line: true
                                },
                            ]
                        }/>

                    )
                }
                </NavMenu>

            </Nav>
            <div className={"container"}>
                <AlertArea/>
            </div>
        </>
    );
};

export default Navbar;
