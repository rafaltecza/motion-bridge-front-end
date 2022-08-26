import axios from 'axios';

export const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_SUFFIX}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'TimeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    timeout: 10000
});

apiClient.interceptors.request.use(config => {
    config.headers['TimeZone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
    config.headers['Token'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
    localStorage.getItem('session_token') && (config.headers.Authorization = `Bearer ${localStorage.getItem('session_token')}`);
    return config;
}, error => {
    return Promise.reject(error);
});

export const { get, post, put, delete: delete_ } = apiClient;