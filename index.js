import{a as h,S as g,i as a}from"./assets/vendor-CUekChMk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const d=s=>{const e=s.tags.split(",")[0].trim().toUpperCase();return`
  <li class="gallery-card">
    <a class="gallery-link" href="${s.largeImageURL}"><img class="gallery-img" src="${s.webformatURL}" alt="${e}" width="360" height="200" title="Beautiful Image" /></a>
   <ul class="inform-list">
              <li class="inform">
                <h3 class="inform-title">Likes:</h3>
                <p class="inform-text">${s.likes}</p>
              </li>
              <li class="inform">
                <h3 class="inform-title">Views:</h3>
                <p class="inform-text">${s.views}</p>
              </li>
              <li class="inform">
                <h3 class="inform-title">Comments:</h3>
                <p class="inform-text">${s.comments}</p>
              </li>
              <li class="inform">
                <h3 class="inform-title">Downloads:</h3>
                <p class="inform-text">${s.downloads}</p>
              </li>
            </ul>
            </li>`},y=(s,e)=>{const o={params:{key:"48265193-8ac6160565acb44bbb7dfb3fe",q:s,image_type:"photo",orientation:"horizontal",page:e,per_page:15,safesearch:!0}};return h.get("https://pixabay.com/api/",o)},f=document.querySelector(".input-search"),c=document.querySelector(".gallery-list"),l=document.querySelector(".loader"),u=document.querySelector(".btn-load");l.style.display="none";const b=new g(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,scrollZoom:!1});let n=1,m="";u.classList.add("is-hidden");const L=async s=>{try{if(s.preventDefault(),m=s.currentTarget.elements.input.value.trim(),m===""){a.error({title:"Ошибка",message:"Поле должно быть заполнено!",position:"bottomRight",closeOnClick:!0});return}c.innerHTML="",l.style.display="flex",n=1;const{data:e}=await y(m,n);if(e.hits.length===0){a.error({title:"Ошибка",message:"Извините, нет результатов, соответствующих вашему поисковому запросу. Попробуйте еще раз!",position:"bottomRight",closeOnClick:!0}),c.innerHTML="",f.reset(),l.style.display="none";return}e.totalHits>1&&u.classList.remove("is-hidden"),n>=e.totalHits&&a.error({color:"blue",title:"",message:"Сожалеем, но больше нет информации по Вашему запросу!",position:"topRight",closeOnClick:!0});const o=e.hits.map(i=>d(i)).join("");c.innerHTML=o,f.reset(),l.style.display="none",u.addEventListener("click",w),b.refresh()}catch(e){e.message==="Network Error"&&a.error({title:"Ошибка",message:"Ошибка загрузки изображений. Попробуйте снова.",position:"bottomRight",closeOnClick:!0})}};f.addEventListener("submit",L);const w=async s=>{l.style.display="flex";try{n++;const{data:e}=await y(m,n),o=e.hits.map(i=>d(i)).join("");c.insertAdjacentHTML("beforeend",o),l.style.display="none"}catch(e){e.message==="Network Error"&&a.error({title:"Ошибка",message:"Ошибка загрузки изображений. Попробуйте снова.",position:"bottomRight",closeOnClick:!0})}};
//# sourceMappingURL=index.js.map
