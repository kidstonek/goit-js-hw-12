import{a as d,S as q,i}from"./assets/vendor-CVWx-W0A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function h(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(r){if(r.ep)return;r.ep=!0;const o=h(r);fetch(r.href,o)}})();d.defaults.baseURL="https://pixabay.com/api/";d.defaults.params={key:"56291655-46a36a1bb1a9da85580c7f68a"};const y=15;async function p(e,t){return(await d.get("",{params:{q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:y}})).data}const n=document.querySelector(".gallery"),g=document.querySelector(".loader"),v=document.querySelector(".btn-load"),L=new q(".gallery a",{captionsData:"alt",captionSelector:"img",captionDelay:250});function R(e){n.innerHTML=e.map(S).join(""),L.refresh()}function M(e){n.insertAdjacentHTML("beforeend",e.map(S).join(""));const t=n.firstElementChild.getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"}),L.refresh()}function P(){n.innerHTML=""}function E(){g.classList.add("visible")}function m(){g.classList.remove("visible")}function $(){v.classList.remove("hidden")}function w(){v.classList.add("hidden")}function S(e){return`
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
`}function b(){i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}const a={usrSearch:document.querySelector("input"),usrForm:document.querySelector("form"),showMore:document.querySelector(".btn-load")};let c,s,u;a.usrForm.addEventListener("submit",async e=>{if(e.preventDefault(),c=a.usrSearch.value,!!a.usrSearch.value.trim()){P(),E();try{s=1,w();const t=await p(c,s);if(u=Math.ceil(t.totalHits/y),m(),t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.usrSearch.value="";return}R(t.hits),a.usrSearch.value="",u>1?$():b()}catch{m(),a.usrSearch.value="",i.error({message:"Something went wrong!",position:"topRight"})}}});a.showMore.addEventListener("click",async e=>{e.preventDefault(),s+=1,s>=u&&(w(),b());try{const t=await p(c,s);M(t.hits)}catch{i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}});
//# sourceMappingURL=index.js.map
