import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

export const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const buttonLoader = document.querySelector('.btn-load')
const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionSelector: 'img',
    captionDelay: 250,
});


export function createGallery(images) {
    galleryEl.innerHTML = images.map(image).join('');
    gallery.refresh();
}

export function addingGallery(images) {
  galleryEl.insertAdjacentHTML('beforeend', images.map(image).join(''));
  gallery.refresh();
}

export function clearGallery() {
    galleryEl.innerHTML = '';
}

export function showLoader() {
    loaderEl.classList.add('visible');
}

export function hideLoader() {
    loaderEl.classList.remove('visible');
}

export function showLoadMoreButton() {
  buttonLoader.classList.remove('hidden');
 }

export function hideLoadMoreButton() {
  buttonLoader.classList.add('hidden');
}


function image(img) {
  return `
          <li class="gallery-item">
            <a class="gallery-link" href="${img.largeImageURL}">
              <img
                src="${img.webformatURL}"
                alt="${img.tags}"
                width="360"
                height="200"
                data-source="${img.largeImageURL}"
              />
            </a>
            <div class="gallery-item-info">
              <h4>Likes</h4>
              <p>${img.likes}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Views</h4>
              <p>${img.views}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Comments</h4>
              <p>${img.comments}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Downloads</h4>
              <p>${img.downloads}</p>
            </div>
          </li>
`
}


export function endOfCollection() {
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight'
  })
}