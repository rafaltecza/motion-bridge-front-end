import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>MotionBridge</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/cookie">Cookie</NavLink>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>

                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>*/}
                {/*</NavBtn>*/}
            </Nav>
        </>
    );
};

export default Navbar;