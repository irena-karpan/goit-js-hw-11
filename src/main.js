'use strict'

import getImagesByQuery from './js/pixabay-api';

// iziToast
import iziToast from "izitoast";
// styles
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', requestHandler);

function requestHandler(event) {
    event.preventDefault();

    const input = event.target.elements['search-text'];

    if (!input.value.trim()) {
        iziToast.error();
    }
    
    getImagesByQuery(input.value.trim())
    .then(response => console.log(response))
        .catch(error => iziToast.error());
}