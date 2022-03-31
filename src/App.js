import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home'
import SlideRoutes from 'react-slide-routes';
import SignIn from "./pages/sign-in";
import SignOut from "./pages/sign-out";
import Cookie from "./pages/cookie";

function App() {
  return (
    <Router>
      <SlideRoutes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"cookie"} element={<Cookie/>}/>
        <Route path={"sign-in"} element={<SignIn/>}/>
        <Route path={"sign-out"} element={<SignOut/>}/>
      </SlideRoutes>
    </Router>
  );
}

export default App;
