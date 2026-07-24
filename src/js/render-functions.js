'use strict'

// Simplelightbox
import SimpleLightbox from "simplelightbox";
// styles
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const loader = document.querySelector('.loader');

let simpleGallery = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    gallery.innerHTML = createMarkup(images);

    simpleGallery.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    // loader.classList.remove('.hidden');
    loader.style.display = 'block';
}
export function hideLoader() {
    // loader.classList.add('.hidden');
    loader.style.display = 'none';
    
}

function createMarkup(images) {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return  `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
        width = '400'
    />
    </a>
    <div class='info'>
    <p class='text'>Likes <span class='accent'>${likes}</span></p>
    <p class='text'>Views <span class='accent'>${views}</span></p>
    <p class='text'>Comments <span class='accent'>${comments}</span></p>
    <p class='text'>Downloads <span class='accent'>${downloads}</span></p>
    </div>
    </li>`
    }).join('');
}