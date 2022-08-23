import jwt_decode from 'jwt-decode';

import {createContext, useContext, useEffect, useState} from "react";
import {fromUnixTime, differenceInSeconds } from 'date-fns';
import {useMutation} from "@tanstack/react-query";
import { _ } from "lodash";

const UserContext = createContext({});
const allowedUserTypes = ['admin', 'user'];

export const UserContextProvider = ({ children }) => {
    const sessionTokenItem = localStorage.getItem('sessionToken');
    let sessionToken = null;
    let tokenDecoded = null;
    if (sessionTokenItem) {
        //sessionToken = JSON.parse(sessionTokenItem);
        //tokenDecoded = jwt_decode(sessionToken);
    }
    const [user, setUserData] = useState(tokenDecoded);
    const [isLoggedIn, setIsLoggedIn] = useState(!!sessionToken);

    console.log(isLoggedIn);

    const setUser = (token) => {
        //localStorage.setItem('sessionToken', token);
        //setUserData(jwt_decode(token));
        //setIsLoggedIn(true);
    }

    const removeUser = () => {
        //localStorage.removeItem('sessionToken');
        //setUserData({});
        //setIsLoggedIn(false);
    }

    const onSuccess = async (data) => {
        const token = _.include(data, 'data.access_token')
        setUser(token)
    }

    const onError = (error) => {
        console.log(error);
    }

    useEffect(() => {
        const sessionToken = localStorage.getItem('sessionToken');

        if(!user?.uuid && sessionToken) {
        //    const tokenDecoded = jwt_decode(sessionToken);
        //    tokenDecoded && setUserData(tokenDecoded);
        }
    }, []);

    useEffect(() => {
        /*if(user && !user.roles.find(item => allowedUserTypes.includes(item))) {
            removeUser();
        }*/
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