import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://diverloggerhashcode.azurewebsites.net/api',
    baseURL: 'http://localhost:90/api',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default instance;