import{a as g,S as b,i as l}from"./assets/vendor-CUekChMk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const f=s=>{const e=s.tags.split(",")[0].trim().toUpperCase();return`
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
            </li>`},h=(s,e)=>{const i={params:{key:"48265193-8ac6160565acb44bbb7dfb3fe",q:s,image_type:"photo",orientation:"horizontal",page:e,per_page:15,safesearch:!0}};return g.get("https://pixabay.com/api/",i)},u=document.querySelector(".input-search"),d=document.querySelector(".gallery-list"),o=document.querySelector(".loader"),n=document.querySelector(".btn-load");o.style.display="none";const y=new b(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250,scrollZoom:!1});let c=1,m="";n.classList.add("is-hidden");const L=async s=>{try{if(s.preventDefault(),m=s.currentTarget.elements.input.value.trim(),m===""){l.error({title:"Ошибка",message:"Поле должно быть заполнено!",position:"bottomRight",closeOnClick:!0});return}d.innerHTML="",o.style.display="flex",c=1;const{data:e}=await h(m,c);if(e.hits.length===0){l.error({title:"Ошибка",message:"Извините, нет результатов, соответствующих вашему поисковому запросу. Попробуйте еще раз!",position:"bottomRight",closeOnClick:!0}),d.innerHTML="",u.reset(),o.style.display="none",n.classList.add("is-hidden");return}n.classList.remove("is-hidden"),c>=Math.ceil(e.totalHits/e.hits.length)&&(l.error({color:"blue",title:"",message:"Сожалеем, но больше нет информации по Вашему запросу!",position:"topRight",closeOnClick:!0}),n.classList.add("is-hidden"));const i=e.hits.map(a=>f(a)).join("");d.innerHTML=i,u.reset(),o.style.display="none",n.addEventListener("click",w),y.refresh()}catch(e){e.message==="Network Error"&&l.error({title:"Ошибка",message:"Ошибка загрузки изображений. Попробуйте снова.",position:"bottomRight",closeOnClick:!0})}};u.addEventListener("submit",L);const w=async s=>{o.style.display="flex";try{c++;const{data:e}=await h(m,c);if(e.hits.length===0){l.error({color:"blue",title:"",message:"Сожалеем, но больше нет информации по Вашему запросу!",position:"topRight",closeOnClick:!0}),n.classList.add("is-hidden"),o.style.display="none";return}const i=e.hits.map(r=>f(r)).join("");d.insertAdjacentHTML("beforeend",i),o.style.display="none";const t=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),y.refresh()}catch(e){e.message==="Network Error"&&l.error({title:"Ошибка",message:"Ошибка загрузки изображений. Попробуйте снова.",position:"bottomRight",closeOnClick:!0})}};
//# sourceMappingURL=index.js.map
