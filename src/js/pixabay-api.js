'use strict'

import axios from 'axios';


const API_KEY = '56837157-ad8111c875f4ca56107ce81f0';

axios.defaults.baseURL = "https://pixabay.com";

export default function getImagesByQuery(query) {
    return axios.get('/api', {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
    }
})
}