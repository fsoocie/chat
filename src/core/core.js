import axios from 'axios'

const instance = axios.create({
    baseURL: window.location.origin,
    headers: {
        token: window.localStorage.token
    }
});
window.instance = instance;

export default instance