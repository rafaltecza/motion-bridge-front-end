import {post,get} from "../index";

export const endpoints = {
    subscriptionsRequest: `/users/subscriptions`,
    instagramRequest: `/finder/instagram`,
}

export const requestSubscriptions = (data) => {
    return get(endpoints.subscriptionsRequest, data);
}

export const requestInstagram = (data) => {
    return post(endpoints.instagramRequest, data);
}
