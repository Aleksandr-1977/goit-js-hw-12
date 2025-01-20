export const createGalleryCard = imgCard => {
  const firstTag = imgCard.tags.split(',')[0].trim().toUpperCase();
  return `
  <li class="gallery-card">
    <a class="gallery-link" href="${imgCard.largeImageURL}"><img class="gallery-img" src="${imgCard.webformatURL}" alt="${firstTag}" width="360" height="200" title="Beautiful Image" /></a>
   <ul class="inform-list">
              <li class="inform">
                <h3 class="inform-title">Likes:</h3>
                <p class="inform-text">${imgCard.likes}</p>
              </li>
              <li class="inform">
                <h3 class="inform-title">Views:</h3>
                <p class="inform-text">${imgCard.views}</p>
              </li>
              <li class="inform">
                <h3 class="inform-title">Comments:</h3>
                <p class="inform-text">${imgCard.comments}</p>
              </li>
              <li class="inform">
                <h3 class="inform-title">Downloads:</h3>
                <p class="inform-text">${imgCard.downloads}</p>
              </li>
            </ul>
            </li>`;
};
