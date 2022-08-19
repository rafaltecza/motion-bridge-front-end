import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "@fontsource/poppins";

import Home from './pages/home'
import SlideRoutes from 'react-slide-routes';
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Cookie from "./pages/cookie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {ParallaxProvider} from "react-scroll-parallax";
import ForgotPassword from "./pages/forgot-password";
import DeleteAccount from "./pages/delete-account";
import Settings from "./pages/Settings";
import AdminProducts from "./pages/admin-products";
import AdminUsers from "./pages/admin-users";
import MyProducts from "./pages/MyProducts";
import AdminPage from "./pages/Admin";
import ContactPage from "./pages/Settings/Contact";
import AccountPage from "./pages/Settings/Account";
import SubscriptionPage from "./pages/Settings/Subscription";
import HelpPage from "./pages/Settings/Help";
import ProductPage from "./pages/Product";
import ProductsPage from "./pages/ProductList";

function App() {
    return (
        <Router>
            <Navbar/>
            <ParallaxProvider>
                <SlideRoutes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"products"} element={<ProductsPage/>}/>
                        <Route path={"products/:productRoute"} element={<ProductPage/>}/>
                        <Route path={"cookie"} element={<Cookie/>}/>
                        <Route path={"settings/account"} element={<AccountPage/>}/>
                        <Route path={"settings/subscriptions"} element={<SubscriptionPage/>}/>
                        <Route path={"settings/help"} element={<HelpPage/>}/>
                        <Route path={"delete-account"} element={<DeleteAccount/>}/>
                        <Route path={"settings"} element={<Settings/>}/>
                        <Route path={"settings/contact"} element={<ContactPage/>}/>
                        <Route path={"sign-in"} element={<SignIn/>}/>
                        <Route path={"sign-up"} element={<SignUp/>}/>
                        <Route path={"forgot-password"} element={<ForgotPassword/>}/>
                        <Route path={"my-products"} element={<MyProducts/>}/>
                        <Route path={"admin"} element={<AdminPage/>}/>
                        <Route path={"admin/products"} element={<AdminProducts/>}/>
                        <Route path={"admin/users"} element={<AdminUsers/>}/>
                </SlideRoutes>
            </ParallaxProvider>
            <Footer/>
        </Router>
    );
}

export default App;
