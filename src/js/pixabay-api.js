import axios from 'axios';

export const fetchPhotosByQuery = (searchQuery, currentPage) => {
  const axiosOptions = {
    params: {
      key: '48265193-8ac6160565acb44bbb7dfb3fe',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      page: currentPage,
      per_page: 15,
      safesearch: true,
    },
  };
  return axios.get(`https://pixabay.com/api/`, axiosOptions);
};
