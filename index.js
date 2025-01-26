import{a as y,S as b,i as r}from"./assets/vendor-CUekChMk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const f=t=>{const s=t.tags.split(",")[0].trim().toUpperCase();return`
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
            </li>`},h=(t,s)=>{const i={params:{key:"48265193-8ac6160565acb44bbb7dfb3fe",q:t,image_type:"photo",orientation:"horizontal",page:s,per_page:15,safesearch:!0}};return y.get("https://pixabay.com/api/",i)},p=document.querySelector(".input-search"),d=document.querySelector(".gallery-list"),a=document.querySelector(".loader"),l=document.querySelector(".btn-load");a.style.display="none";const g=new b(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,scrollZoom:!1});let c=1,m="";l.classList.add("is-hidden");const L=async t=>{try{if(t.preventDefault(),m=t.currentTarget.elements.input.value.trim(),m===""){r.error({title:"Ошибка",message:"Поле должно быть заполнено!",position:"bottomRight",closeOnClick:!0});return}d.innerHTML="",a.style.display="flex",c=1;const{data:s}=await h(m,c);if(s.hits.length===0){r.error({title:"Ошибка",message:"Извините, нет результатов, соответствующих вашему поисковому запросу. Попробуйте еще раз!",position:"bottomRight",closeOnClick:!0}),d.innerHTML="",p.reset(),a.style.display="none",l.classList.add("is-hidden");return}Math.ceil(s.totalHits/15)<=1?(l.classList.add("is-hidden"),r.error({color:"blue",title:"",message:"Сожалеем, но больше нет информации по Вашему запросу!",position:"bottomRight",closeOnClick:!0})):l.classList.remove("is-hidden");const n=s.hits.map(e=>f(e)).join("");d.innerHTML=n,p.reset(),a.style.display="none",l.addEventListener("click",w),g.refresh()}catch(s){s.message==="Network Error"&&r.error({title:"Ошибка!",message:"Сервер не отвечает. Попробуйте позже.",position:"bottomRight",closeOnClick:!0})}};p.addEventListener("submit",L);const w=async()=>{a.style.display="flex";try{c++;const{data:t}=await h(m,c),s=Math.ceil(t.totalHits/15),i=t.hits.map(o=>f(o)).join("");d.insertAdjacentHTML("beforeend",i),c>=s&&(l.classList.add("is-hidden"),r.error({color:"blue",title:"",message:"Это вся доступная информация на нашем ресурсе по Вашему запросу.",position:"bottomRight",closeOnClick:!0})),a.style.display="none";const e=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),g.refresh()}catch(t){t.message==="404"&&r.error({title:"Ошибка!",message:"Сервер не отвечает. Попробуйте позже.",position:"bottomRight",closeOnClick:!0})}};
//# sourceMappingURL=index.js.map
