'use strict'

import getImagesByQuery from './js/pixabay-api';

import errorIcon from './img/error.svg'

// iziToast
import iziToast from "izitoast";
// styles
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

const iziErrorOptions = {
    title: "Error",
    backgroundColor:'#EF4040',
    iconUrl: errorIcon,
    position: 'topRight',
    titleColor: '#FFFFFF',
    messageColor: '#FFFFFF',
    iconColor: '#FFFFFF',
    timeout: 5000,
};

form.addEventListener('submit', requestHandler);

function requestHandler(event) {
    event.preventDefault();

    const input = event.target.elements['search-text'];

    if (!input.value.trim()) {
        iziToast.error({
            ...iziErrorOptions,
            message: "Empty data. Please try again!"
        });
    }
    
    getImagesByQuery(input.value.trim())
    .then(response => console.log(response))
        .catch(error =>  iziToast.error({
        ...iziErrorOptions,
        message: "Sorry, there are no images matching your search query. Please try again!",
    }))
}