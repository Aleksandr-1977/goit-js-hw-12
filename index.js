import{a as g,S as b,i as a}from"./assets/vendor-CUekChMk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const d=s=>{const e=s.tags.split(",")[0].trim().toUpperCase();return`
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
            </li>`},h=(s,e)=>{const o={params:{key:"48265193-8ac6160565acb44bbb7dfb3fe",q:s,image_type:"photo",orientation:"horizontal",page:e,per_page:15,safesearch:!0}};return g.get("https://pixabay.com/api/",o)},u=document.querySelector(".input-search"),c=document.querySelector(".gallery-list"),i=document.querySelector(".loader"),f=document.querySelector(".btn-load");i.style.display="none";const y=new b(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,scrollZoom:!1});let n=1,m="";f.classList.add("is-hidden");const L=async s=>{try{if(s.preventDefault(),m=s.currentTarget.elements.input.value.trim(),m===""){a.error({title:"Ошибка",message:"Поле должно быть заполнено!",position:"bottomRight",closeOnClick:!0});return}c.innerHTML="",i.style.display="flex",n=1;const{data:e}=await h(m,n);if(e.hits.length===0){a.error({title:"Ошибка",message:"Извините, нет результатов, соответствующих вашему поисковому запросу. Попробуйте еще раз!",position:"bottomRight",closeOnClick:!0}),c.innerHTML="",u.reset(),i.style.display="none";return}e.totalHits>1&&f.classList.remove("is-hidden"),n>=e.totalHits&&a.error({color:"blue",title:"",message:"Сожалеем, но больше нет информации по Вашему запросу!",position:"topRight",closeOnClick:!0});const o=e.hits.map(l=>d(l)).join("");c.innerHTML=o,u.reset(),i.style.display="none",f.addEventListener("click",w),y.refresh()}catch(e){e.message==="Network Error"&&a.error({title:"Ошибка",message:"Ошибка загрузки изображений. Попробуйте снова.",position:"bottomRight",closeOnClick:!0})}};u.addEventListener("submit",L);const w=async s=>{i.style.display="flex";try{n++;const{data:e}=await h(m,n),o=e.hits.map(r=>d(r)).join("");c.insertAdjacentHTML("beforeend",o),i.style.display="none";const t=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),y.refresh()}catch(e){e.message==="Network Error"&&a.error({title:"Ошибка",message:"Ошибка загрузки изображений. Попробуйте снова.",position:"bottomRight",closeOnClick:!0})}};
//# sourceMappingURL=index.js.map
