'use strict'

import getImagesByQuery from './js/pixabay-api';

import errorIcon from './img/error.svg';

import * as renderFunctions from './js/render-functions';

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

renderFunctions.hideLoader();

form.addEventListener('submit', requestHandler);

function requestHandler(event) {
    event.preventDefault();

    const input = event.target.elements['search-text'];

    if (!input.value.trim()) {
        iziToast.error({
            ...iziErrorOptions,
            message: "Empty data. Please try again!"
        });
        return;
    }

    renderFunctions.clearGallery();
    renderFunctions.showLoader();
    
    getImagesByQuery(input.value.trim())
        .then(({ hits }) => {

            if (!hits.length) {
                iziToast.error({
                    ...iziErrorOptions,
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                return;
            }

            renderFunctions.createGallery(hits);
        })
        .catch(error => iziToast.error({
            ...iziErrorOptions,
            message: "Something went wrong. Please try again later!",
        }))
        .finally( renderFunctions.hideLoader);
    
    event.target.reset();
}