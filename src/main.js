import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createGalleryCard } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const searchForm = document.querySelector('.input-search');
const galleryElem = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.btn-load');

loader.style.display = 'none';

const simpleLight = new SimpleLightbox('.gallery-list a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
let page = 1;
let searchQuery = '';

loadMoreBtn.classList.add('is-hidden');
const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    searchQuery = event.currentTarget.elements.input.value.trim();
    if (searchQuery === '') {
      iziToast.error({
        title: 'Ошибка',
        message: 'Поле должно быть заполнено!',
        position: 'bottomRight',
        closeOnClick: true,
      });
      return;
    }
    galleryElem.innerHTML = '';
    loader.style.display = 'flex';
    page = 1;
    const { data } = await fetchPhotosByQuery(searchQuery, page);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Ошибка',
        message:
          'Извините, нет результатов, соответствующих вашему поисковому запросу. Попробуйте еще раз!',
        position: 'bottomRight',
        closeOnClick: true,
      });
      galleryElem.innerHTML = '';
      searchForm.reset();
      loader.style.display = 'none';
      loadMoreBtn.classList.add('is-hidden');
      return;
    }
    const totalPages = Math.ceil(data.totalHits / 15);
    if (totalPages <= 1) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.error({
        color: 'blue',
        title: '',
        message: 'Сожалеем, но больше нет информации по Вашему запросу!',
        position: 'bottomRight',
        closeOnClick: true,
      });
    } else {
      loadMoreBtn.classList.remove('is-hidden');
    }
    const galleryTemplate = data.hits.map(el => createGalleryCard(el)).join('');
    galleryElem.innerHTML = galleryTemplate;
    searchForm.reset();
    loader.style.display = 'none';
    loadMoreBtn.addEventListener('click', loadMoreBtnClick);
    simpleLight.refresh();
  } catch (err) {
    if (err.message === 'Network Error') {
      iziToast.error({
        title: 'Ошибка!',
        message: 'Сервер не отвечает. Попробуйте позже.',
        position: 'bottomRight',
        closeOnClick: true,
      });
    }
  }
};
searchForm.addEventListener('submit', onSearchFormSubmit);
const loadMoreBtnClick = async event => {
  loader.style.display = 'flex';
  try {
    page++;
    const { data } = await fetchPhotosByQuery(searchQuery, page);
    const totalPages = Math.ceil(data.totalHits / 15);
    const galleryTemplate = data.hits.map(el => createGalleryCard(el)).join('');
    galleryElem.insertAdjacentHTML('beforeend', galleryTemplate);
    if (page >= totalPages) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.error({
        color: 'blue',
        title: '',
        message:
          'Это вся доступная информация на нашем ресурсе по Вашему запросу.',
        position: 'bottomRight',
        closeOnClick: true,
      });
    }
    loader.style.display = 'none';

    const sizeCard = document.querySelector('.gallery-card');
    const cardHeight = sizeCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    simpleLight.refresh();
  } catch (err) {
    if (err.message === '404') {
      iziToast.error({
        title: 'Ошибка!',
        message: 'Сервер не отвечает. Попробуйте позже.',
        position: 'bottomRight',
        closeOnClick: true,
      });
    }
  }
};
