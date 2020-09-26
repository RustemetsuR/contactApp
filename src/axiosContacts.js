import axios from 'axios';

const axiosContacts = axios.create({
    baseURL: 'https://contacts-app-3029c.firebaseio.com/',
});

export default axiosContacts;