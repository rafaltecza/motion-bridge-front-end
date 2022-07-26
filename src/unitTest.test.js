import React from 'react';
import {mount, render, shallow} from "enzyme";

import AccountData from "./pages/account-data"
import AdminPanel from "./pages/admin-panel"
import AdminProducts from "./pages/admin-products"
import AdminUsers from "./pages/admin-users";
import Contact from "./pages/contact";
import DeleteAccount from "./pages/delete-account";
import Faq from "./pages/faq";
import ForgotPassword from "./pages/forgot-password";
import Home from "./pages/home";
import OwnedProducts from "./pages/owned-products";
import Products from "./pages/products";
import Settings from "./pages/settings";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Subscription from "./pages/subscriptions";


it('Test render AccountData', () => {
    shallow(<AccountData />);
});

it('Test render AdminPanel', () => {
    shallow(<AdminPanel />);
});

it('Test render AdminProducts', () => {
    shallow(<AdminProducts />);
});

it('Test render AdminUsers', () => {
    shallow(<AdminUsers />);
});

it('Test render Contact', () => {
    shallow(<Contact />);
});

it('Test render DeleteAccount', () => {
    shallow(<DeleteAccount />);
});
it('Test render accountData', () => {
    shallow(<AccountData />);
});
it('Test render Faq', () => {
    shallow(<Faq />);
});
it('Test render ForgotPassword', () => {
    shallow(<ForgotPassword />);
});
it('Test render Home', () => {
    shallow(<Home />);
});
it('Test render OwnedProducts', () => {
    shallow(<OwnedProducts />);
});
it('Test render Products', () => {
    shallow(<Products />);
});
it('Test render Settings', () => {
    shallow(<Settings />);
});
it('Test render SignIn', () => {
    shallow(<SignIn />);
});
it('Test render SignUp', () => {
    shallow(<SignUp />);
});
it('Test render Subscription', () => {
    shallow(<Subscription />);
});

