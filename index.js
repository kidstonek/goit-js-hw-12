import{a as u,S as q,i}from"./assets/vendor-CVWx-W0A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&f(n)}).observe(document,{childList:!0,subtree:!0});function h(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(t){if(t.ep)return;t.ep=!0;const o=h(t);fetch(t.href,o)}})();u.defaults.baseURL="https://pixabay.com/api/";u.defaults.params={key:"56291655-46a36a1bb1a9da85580c7f68a"};const m=15;async function p(e,r){return(await u.get("",{params:{q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:m}})).data}const d=document.querySelector(".gallery"),g=document.querySelector(".loader"),v=document.querySelector(".btn-load"),L=new q(".gallery a",{captionsData:"alt",captionSelector:"img",captionDelay:250});function M(e){d.innerHTML=e.map(b).join(""),L.refresh()}function P(e){d.insertAdjacentHTML("beforeend",e.map(b).join("")),L.refresh()}function R(){d.innerHTML=""}function $(){g.classList.add("visible")}function y(){g.classList.remove("visible")}function E(){v.classList.remove("hidden")}function S(){v.classList.add("hidden")}function b(e){return`
          <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img
                src="${e.webformatURL}"
                alt="${e.tags}"
                width="360"
                height="200"
                data-source="${e.largeImageURL}"
              />
            </a>
            <div class="gallery-item-info">
              <h4>Likes</h4>
              <p>${e.likes}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Views</h4>
              <p>${e.views}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Comments</h4>
              <p>${e.comments}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Downloads</h4>
              <p>${e.downloads}</p>
            </div>
          </li>
`}const a={usrSearch:document.querySelector("input"),usrForm:document.querySelector("form"),showMore:document.querySelector(".btn-load")};let l,s,c;a.usrForm.addEventListener("submit",async e=>{if(e.preventDefault(),l=a.usrSearch.value,!!a.usrSearch.value.trim()){R(),$();try{s=1,S();const r=await p(l,s);if(c=Math.ceil(r.totalHits/m),y(),r.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.usrSearch.value="";return}M(r.hits),a.usrSearch.value="",c>1?E():w()}catch{y(),a.usrSearch.value="",i.error({message:"Something went wrong!",position:"topRight"})}}});a.showMore.addEventListener("click",async e=>{e.preventDefault(),s+=1,s>=c&&(S(),w());try{const r=await p(l,s);P(r.hits)}catch{i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}});const w=()=>{i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})};
//# sourceMappingURL=index.js.map
