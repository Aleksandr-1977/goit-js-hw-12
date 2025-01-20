import{S as f,i as a}from"./assets/vendor-B9aX0573.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=t=>{const s=t.tags.split(",")[0].trim().toUpperCase();return`
  <li class="gallery-card">
    <a class="gallery-link" href="${t.largeImageURL}"><img class="gallery-img" src="${t.webformatURL}" alt="${s}" width="360" height="200" title="Beautiful Image" /></a>
   <ul class="inform-list">
              <li class="inform">
                <h3 class="inform-title">Likes:</h3>
                <p class="inform-text">${t.likes}</p>
              </li>
              <li class="inform">
                <h3 class="inform-title">Views:</h3>
                <p class="inform-text">${t.views}</p>
              </li>
              <li class="inform">
                <h3 class="inform-title">Comments:</h3>
                <p class="inform-text">${t.comments}</p>
              </li>
              <li class="inform">
                <h3 class="inform-title">Downloads:</h3>
                <p class="inform-text">${t.downloads}</p>
              </li>
            </ul>
            </li>`},p=t=>{const s=new URLSearchParams({key:"48265193-8ac6160565acb44bbb7dfb3fe",q:t,image_type:"photo",orientation:"horizontal",per_page:9,safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},m=document.querySelector(".input-search"),c=document.querySelector(".gallery-list"),l=document.querySelector(".loader");l.style.display="none";const h=new f(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,scrollZoom:!1}),y=t=>{t.preventDefault();const s=t.currentTarget.elements.input.value.trim();if(s===""){a.error({title:"Ошибка",message:"Поле должно быть заполнено!",position:"bottomRight",closeOnClick:!0});return}l.style.display="flex",p(s).then(o=>{if(o.hits.length===0){a.error({title:"Ошибка",message:"Извините, нет результатов, соответствующих вашему поисковому запросу. Попробуйте еще раз!",position:"bottomRight",closeOnClick:!0}),c.innerHTML="",m.reset(),l.style.display="none";return}const i=o.hits.map(e=>u(e)).join("");c.innerHTML=i,h.refresh(),l.style.display="none"}).catch(o=>{o.mesage==="404"&&a.error({title:"Ошибка",message:"Ошибка загрузки изображений. Попробуйте снова.",position:"bottomRight",closeOnClick:!0})})};m.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
