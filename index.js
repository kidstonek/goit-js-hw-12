import{a as f,S as M,i as n}from"./assets/vendor-CVWx-W0A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&y(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function y(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();f.defaults.baseURL="https://pixabay.com/api/";f.defaults.params={key:"56291655-46a36a1bb1a9da85580c7f68a"};const m=15;async function p(e,r){return(await f.get("",{params:{q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:m}})).data}const l=document.querySelector(".gallery"),g=document.querySelector(".loader"),v=document.querySelector(".btn-load"),L=new M(".gallery a",{captionsData:"alt",captionSelector:"img",captionDelay:250});function P(e){l.innerHTML=e.map(q).join(""),L.refresh()}function E(e){l.insertAdjacentHTML("beforeend",e.map(q).join("")),L.refresh()}function $(){l.innerHTML=""}function w(){g.classList.add("visible")}function u(){g.classList.remove("visible")}function S(){v.classList.remove("hidden")}function b(){v.classList.add("hidden")}function q(e){return`
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
`}const a={usrSearch:document.querySelector("input"),usrForm:document.querySelector("form"),showMore:document.querySelector(".btn-load")};let d,s,h;a.usrForm.addEventListener("submit",async e=>{if(e.preventDefault(),d=a.usrSearch.value,!!a.usrSearch.value.trim()){$(),w();try{s=1,b();const r=await p(d,s);if(h=Math.ceil(r.totalHits/m),u(),r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.usrSearch.value="";return}P(r.hits),a.usrSearch.value="",h>1?S():R()}catch{u(),a.usrSearch.value="",n.error({message:"Something went wrong!",position:"topRight"})}}});a.showMore.addEventListener("click",async e=>{e.preventDefault(),s+=1,w(),b();try{const r=await p(d,s);E(r.hits);const i=l.firstElementChild.getBoundingClientRect();window.scrollBy({top:i.height*2,behavior:"smooth"}),s>=h?R():S()}catch{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{u()}});function R(){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}
//# sourceMappingURL=index.js.map
