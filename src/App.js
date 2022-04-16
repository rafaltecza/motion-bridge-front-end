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
import {ParallaxProvider} from "react-scroll-parallax";

function App() {
    return (
        <Router>
            <Navbar/>
            <ParallaxProvider>
                <SlideRoutes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"products"} element={<Products/>}/>
                        <Route path={"cookie"} element={<Cookie/>}/>
                        <Route path={"contact"} element={<Contact/>}/>
                        <Route path={"sign-in"} element={<SignIn/>}/>
                        <Route path={"sign-up"} element={<SignUp/>}/>
                </SlideRoutes>
            </ParallaxProvider>
            <Footer/>
        </Router>
    );
}

export default App;
