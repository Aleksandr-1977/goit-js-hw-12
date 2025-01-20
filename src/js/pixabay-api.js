export const fetchPhotosByQuery = searchQuery => {
  const searchParams = new URLSearchParams({
    key: '48265193-8ac6160565acb44bbb7dfb3fe',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 9,
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
