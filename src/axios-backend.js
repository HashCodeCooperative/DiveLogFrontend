import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://diverloggerhashcode.azurewebsites.net/api'
});

export default instance;