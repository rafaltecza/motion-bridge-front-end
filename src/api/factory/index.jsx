import axios from 'axios';

export const factoryClient = axios.create({
    baseURL: 'http://34.118.9.226:3001',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'TimeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    timeout: 120000
});

factoryClient.interceptors.request.use(config => {
    config.headers['TimeZone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
    config.headers['Token'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return config;
}, error => {
    return Promise.reject(error);
});

export const { get, post, put, delete: delete_ } = factoryClient;