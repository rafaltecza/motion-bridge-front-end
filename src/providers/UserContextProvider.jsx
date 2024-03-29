import jwt_decode from 'jwt-decode';

import {createContext, useContext, useEffect, useState} from "react";
import { _ } from "lodash";
import {useNavigate} from "react-router-dom";

const UserContext = createContext({});
const allowedUserTypes = ['admin', 'user'];

export const UserContextProvider = ({ children }) => {
    const sessionTokenItem = localStorage.getItem('session_token');
    let sessionToken;
    if(sessionTokenItem) sessionToken = jwt_decode(sessionTokenItem.toString());
    const [user, setUserData] = useState(sessionToken);
    const [isLoggedIn, setIsLoggedIn] = useState(!!sessionToken);

    const setUser = (token) => {
        localStorage.setItem('session_token', token);
        setUserData(jwt_decode(token));
        setIsLoggedIn(true);
    }

    const removeUser = () => {
        localStorage.removeItem('session_token');
        setUserData({});
        setIsLoggedIn(false);
    }

    useEffect(() => {
        const sessionToken = localStorage.getItem('session_token');

        if(!user?.uuid && sessionToken) {
           const tokenDecoded = jwt_decode(sessionToken);
           tokenDecoded && setUserData(tokenDecoded);
        }
    }, []);

    useEffect(() => {
         // if(user && !user.roles.find(item => allowedUserTypes.includes(item))) {
         //     removeUser();
         // }
        let timeout = null;
        clearTimeout(timeout);
        return () => clearTimeout(timeout);
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser, removeUser, isLoggedIn }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}