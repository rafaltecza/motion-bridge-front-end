import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "@fontsource/poppins";

import SlideRoutes from 'react-slide-routes';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {ParallaxProvider} from "react-scroll-parallax";
import SettingsPage from "./pages/Settings";
import AdminPage from "./pages/Admin";
import ContactPage from "./pages/Settings/Contact";
import AccountPage from "./pages/Settings/Account";
import SubscriptionPage from "./pages/Settings/Subscription";
import HelpPage from "./pages/Settings/Help";
import ProductPage from "./pages/Product";
import ProductsPage from "./pages/Products";
import InventoryPage from "./pages/Inventory";
import PanelPage from "./pages/Panel";
import LogoutPage from "./pages/Logout";
import CheckoutPage from "./pages/Checkout";
import PrivateRoute from "./components/PrivateRoute";
import {connect} from "react-redux";
import {loadProducts} from "./redux/ProductsTemporary/productsTemporary.actions";
import {useEffect} from "react";
import HomePage from "./pages/Home";
import AdminProductsPage from "./pages/Admin/Products";
import AdminProductActivePage from "./pages/Admin/ProductActive";
import AdminUsersPage from "./pages/Admin/Users";
import CookiePage from "./pages/Cookie";
import ForgotPasswordPage from "./pages/ForgotPassword";
import SignInPage from "./pages/Login";
import SignUpPage from "./pages/Register";

function App(props) {

    useEffect(() => {
        props.loadProducts();
    }, []);

    return (
        <Router>
            <Navbar/>
            <ParallaxProvider>
                <SlideRoutes>
                        <Route path={"/"} element={<HomePage/>}/>
                        <Route path={"products"} element={<ProductsPage/>}/>
                        <Route path={"products/:productRoute"} element={<ProductPage/>}/>
                        <Route path={"panel/:productRoute"} element={<PrivateRoute><PanelPage/></PrivateRoute>}/>
                        <Route path={"cookie"} element={<CookiePage/>}/>
                        <Route path={"settings/account"} element={<PrivateRoute><AccountPage/></PrivateRoute>}/>
                        <Route path={"settings/subscriptions"} element={<PrivateRoute><SubscriptionPage/></PrivateRoute>}/>
                        <Route path={"settings/help"} element={<PrivateRoute><HelpPage/></PrivateRoute>}/>
                        <Route path={"settings"} element={<PrivateRoute><SettingsPage/></PrivateRoute>}/>
                        <Route path={"settings/contact"} element={<ContactPage/>}/>
                        <Route path={"sign-in"} element={<SignInPage/>}/>
                        <Route path={"sign-up"} element={<SignUpPage/>}/>
                        <Route path={"forgot-password"} element={<ForgotPasswordPage/>}/>
                        <Route path={"inventory"} element={<PrivateRoute><InventoryPage/></PrivateRoute>}/>
                        <Route path={"admin"} element={<PrivateRoute><AdminPage/></PrivateRoute>}/>
                        <Route path={"admin/products"} element={<PrivateRoute><AdminProductsPage/></PrivateRoute>}/>
                        <Route path={"admin/users"} element={<PrivateRoute><AdminUsersPage/></PrivateRoute>}/>
                        <Route path={"admin/setProductActive"} element={<PrivateRoute><AdminProductActivePage/></PrivateRoute>}/>
                        <Route path={"logout"} element={<LogoutPage/>}/>
                        <Route path={"checkout"} element={<PrivateRoute><CheckoutPage/></PrivateRoute>}/>

                </SlideRoutes>
            </ParallaxProvider>
            <Footer/>
        </Router>
    );
}

const mapStateToProps = state => {
    return state;
};

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: () => {
            loadProducts()(dispatch);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
