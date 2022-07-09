import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavLogo} from "./NavbarElements";
import Settings from "../Settings";
import AlertArea from "../Alert";
import DropdownNavigation from "../DropdownNavigation";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <NavLogo src={"images/default/motion-bridge-logo.svg"} alt={"logo"}/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <DropdownNavigation></DropdownNavigation>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <Settings></Settings>
                </NavMenu>
                <NavMenu className={"ms-auto"}>
                    <NavLink className={"button-border-red me-0"} to="/sign-in">Sign In</NavLink>
                    <NavLink className={"button-border-red me-0"} to="/sign-up">Sign Up</NavLink>
                </NavMenu>
            </Nav>
            <div className={"container"}>
                <AlertArea/>
            </div>
        </>
    );
};

export default Navbar;
