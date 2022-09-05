import {post, get, delete_, put} from "../index";

export const endpoints = {
    requestSubscriptions: `/users/subscriptions`,
    deleteSubscription: `/orders/%order_id%/subscriptions/%subscription_id%`,
    postOrder: `/orders`,
    requestOrders: `/users/orders`,
    requestInstagramUser: `/finder/instagram`,
    requestUsers: `/users`,
    requestPayment: `payments/stripe/pay`,
    putSubscriptionStatus: `subscriptions/%subscription_id%`,
    putSubscriptionGenerate: `subscriptions/%subscription_id%/generate`,
}

export const putSubscriptionsGenerate = (subscriptionId) => {
    return put(endpoints.putSubscriptionGenerate.replace('%subscription_id%', subscriptionId), {})
}

export const putSubscriptionsStatus = (subscriptionId) => {
    return put(endpoints.putSubscriptionStatus.replace('%subscription_id%', subscriptionId), {})
}


export const postPaymentRequest = (data) => {
    return post(endpoints.requestPayment, data);
}


export const postOrder = (data) => {
    return post(endpoints.postOrder, data);
}


export const deleteSubscription = (orderId, subscriptionId) => {
    return delete_(endpoints.deleteSubscription.replace('%order_id%', orderId)
        .replace('%subscription_id%', subscriptionId));
}

export const requestOrders = () => {
    return get(endpoints.requestOrders);
}

export const requestUsers = () => {
    return get(endpoints.requestUsers);
}

export const requestSubscriptions = (data) => {
    return get(endpoints.requestSubscriptions, data);
}

export const requestInstagram = (data) => {
    return post(endpoints.requestInstagramUser, data);
}
