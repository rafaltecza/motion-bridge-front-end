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
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/sign-in">Sign In</NavLink>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>


                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>*/}
                {/*</NavBtn>*/}
            </Nav>
        </>
    );
};

export default Navbar;
