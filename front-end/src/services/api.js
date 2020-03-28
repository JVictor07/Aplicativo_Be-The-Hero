import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333' /* A parte da URL que sempre se repete */
})

export default api;