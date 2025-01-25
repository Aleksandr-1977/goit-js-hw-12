import{a as y,S as b,i as l}from"./assets/vendor-CUekChMk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const f=s=>{const e=s.tags.split(",")[0].trim().toUpperCase();return`
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
            </li>`},h=(s,e)=>{const i={params:{key:"48265193-8ac6160565acb44bbb7dfb3fe",q:s,image_type:"photo",orientation:"horizontal",page:e,per_page:15,safesearch:!0}};return y.get("https://pixabay.com/api/",i)},p=document.querySelector(".input-search"),m=document.querySelector(".gallery-list"),n=document.querySelector(".loader"),a=document.querySelector(".btn-load");n.style.display="none";const g=new b(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,scrollZoom:!1});let d=1,u="";a.classList.add("is-hidden");const L=async s=>{try{if(s.preventDefault(),u=s.currentTarget.elements.input.value.trim(),u===""){l.error({title:"Ошибка",message:"Поле должно быть заполнено!",position:"bottomRight",closeOnClick:!0});return}m.innerHTML="",n.style.display="flex",d=1;const{data:e}=await h(u,d);if(e.hits.length===0){l.error({title:"Ошибка",message:"Извините, нет результатов, соответствующих вашему поисковому запросу. Попробуйте еще раз!",position:"bottomRight",closeOnClick:!0}),m.innerHTML="",p.reset(),n.style.display="none",a.classList.add("is-hidden");return}Math.ceil(e.totalHits/15)<=1?(a.classList.add("is-hidden"),l.error({color:"blue",title:"",message:"Сожалеем, но больше нет информации по Вашему запросу!",position:"bottomRight",closeOnClick:!0})):a.classList.remove("is-hidden");const r=e.hits.map(t=>f(t)).join("");m.innerHTML=r,p.reset(),n.style.display="none",a.addEventListener("click",w),g.refresh()}catch(e){e.message==="Network Error"&&l.error({title:"Ошибка!",message:"Сервер не отвечает. Попробуйте позже.",position:"bottomRight",closeOnClick:!0})}};p.addEventListener("submit",L);const w=async s=>{n.style.display="flex";try{d++;const{data:e}=await h(u,d),i=Math.ceil(e.totalHits/15),r=e.hits.map(c=>f(c)).join("");m.insertAdjacentHTML("beforeend",r),d>=i&&(a.classList.add("is-hidden"),l.error({color:"blue",title:"",message:"Это вся доступная информация на нащем ресурсе по Вашему запросу.",position:"bottomRight",closeOnClick:!0})),n.style.display="none";const o=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"}),g.refresh()}catch(e){e.message==="404"&&l.error({title:"Ошибка!",message:"Сервер не отвечает. Попробуйте позже.",position:"bottomRight",closeOnClick:!0})}};
//# sourceMappingURL=index.js.map
