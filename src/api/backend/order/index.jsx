import {post, get} from "../index";

export const endpoints = {
    requestOrder: `/orders`,
}

export const requestOrder = (data) => {
    return post(endpoints.requestOrder, data);
}

