import {post, get} from "../index";

export const endpoints = {
    login: `/login`,
    register: `/register`,
    logout: `/logout`,
}

export const signIn = (data) => {
    return post(endpoints.login, data);
}

export const signUp = (data) => {
    return post(endpoints.register, data);
}

export const logout = (data) => {
    return post(endpoints.logout, data);
}