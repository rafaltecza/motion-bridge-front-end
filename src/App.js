import logo from './logo.svg';
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
import Products from "./pages/products";
import Contact from "./pages/contact";
import Settings from "../src/components/Settings";
import {ParallaxProvider} from "react-scroll-parallax";
import ForgotPassword from "./pages/forgot-password";
import Subscriptions from "./pages/subscriptions";
import Faq from "./pages/faq";
import DeleteAccount from "./pages/delete-account";
import AccountData from "./pages/account-data";


function App() {
    return (
        <Router>
            <Navbar/>
            <ParallaxProvider>
                <SlideRoutes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"products"} element={<Products/>}/>
                        <Route path={"cookie"} element={<Cookie/>}/>
                        <Route path={"account-data"} element={<AccountData/>}/>
                        <Route path={"subscriptions"} element={<Subscriptions/>}/>
                        <Route path={"contact"} element={<Contact/>}/>
                        <Route path={"faq"} element={<Faq/>}/>
                        <Route path={"delete-account"} element={<DeleteAccount/>}/>
                        <Route path={"settings"} element={<Settings/>}/>
                        <Route path={"sign-in"} element={<SignIn/>}/>
                        <Route path={"sign-up"} element={<SignUp/>}/>
                        <Route path={"forgot-password"} element={<ForgotPassword/>}/>
                </SlideRoutes>
            </ParallaxProvider>
            <Footer/>
        </Router>
    );
}

export default App;
