import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const local = axios.create({
    // baseURL: 'http://localhost:8080/'
    baseURL: process.env.NODE_ENV === 'production'
        ? '/unidades/'
        : '/'
})