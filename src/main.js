import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';


import { getImagesByQuery, PER_PAGE } from "./js/pixabay-api";
import { createGallery, showLoader, hideLoader, clearGallery, hideLoadMoreButton, showLoadMoreButton, addingGallery, galleryEl } from "./js/render-functions";


const refs = {
    usrSearch: document.querySelector('input'),
    usrForm: document.querySelector('form'),
    showMore: document.querySelector('.btn-load')
}

let query;
let page;
let totalPages;


refs.usrForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    query = refs.usrSearch.value;
    if (!refs.usrSearch.value.trim()) return;
    clearGallery()
    showLoader()
    try {
        page = 1;
        hideLoadMoreButton();
        const myGalery = await getImagesByQuery(query, page);
        totalPages = Math.ceil(myGalery.totalHits / PER_PAGE);
        
        hideLoader();
        if (myGalery.hits.length === 0) {
            iziToast.error({
               message: 'Sorry, there are no images matching your search query. Please try again!',
               position: 'topRight'
            }
            )
            refs.usrSearch.value = '';
            return
        }
        
        createGallery(myGalery.hits)
        refs.usrSearch.value = '';
        if (totalPages > 1) {
            showLoadMoreButton();
            
        } else {
            endOfCollection();
        }
    
        }   catch (error) {
        hideLoader()
        refs.usrSearch.value = '';
        iziToast.error({ message: 'Something went wrong!', position: 'topRight' });
        }
        
})


refs.showMore.addEventListener('click', async (e) => {
    e.preventDefault()
    page += 1;
    showLoader();
    hideLoadMoreButton();
    try {
        const myGalery =  await getImagesByQuery(query, page)
        addingGallery(myGalery.hits)
        
        const myscroll = galleryEl.firstElementChild.getBoundingClientRect();
        window.scrollBy({
            top: myscroll.height * 2,
            behavior: "smooth",
        });
        if (page >= totalPages) {
            endOfCollection();
        } else {
                showLoadMoreButton();
        }
    
    } catch (error) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        })
        
    } finally {
        hideLoader()
    }

})


function endOfCollection() {
  iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    position: 'topRight'
  })
}