import SimpleLightbox from 'simplelightbox';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGalleryCard } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const searchForm = document.querySelector('.input-search');
const galleryElem = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

const simpleLight = new SimpleLightbox('.gallery-list a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchData = event.currentTarget.elements.input.value.trim();
  if (searchData === '') {
    iziToast.error({
      title: 'Ошибка',
      message: 'Поле должно быть заполнено!',
      position: 'bottomRight',
      closeOnClick: true,
    });
    return;
  }
  loader.style.display = 'flex';

  fetchPhotosByQuery(searchData)
    .then(data => {
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
        return;
      }
      const galleryTemplate = data.hits
        .map(el => createGalleryCard(el))
        .join('');
      galleryElem.innerHTML = galleryTemplate;

      simpleLight.refresh();
      loader.style.display = 'none';
    })
    .catch(error => {
      if (error.mesage === '404') {
        iziToast.error({
          title: 'Ошибка',
          message: 'Ошибка загрузки изображений. Попробуйте снова.',
          position: 'bottomRight',
          closeOnClick: true,
        });
      }
    });
};
searchForm.addEventListener('submit', onSearchFormSubmit);
