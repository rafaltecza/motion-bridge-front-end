import {post,put, get, delete_} from "../index";

export const endpoints = {
    login: `users/login`,
    register: `/register`,
    logout: `/logout`,
    changePassword: `users/changePassword`,
    changeName: `users/changeName`,
    deleteUser: `users`,
    add: `products`,
    setActive: `/products/`,
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

export const changePassword = (data) => {
    return put(endpoints.changePassword, data);
}

export const changeName = (data) => {
    return put(endpoints.changeName, data);
}

export const deleteUser = (data) => {
    return delete_(endpoints.deleteUser, data);
}

export const addProduct = (data) => {
    return post(endpoints.add, data);
}

export const setProductActive = (data) =>
{
    return put(endpoints.setActive+data.productId, data);
}