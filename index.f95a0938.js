const t=document.querySelector(".page"),e=t.querySelectorAll(".card"),a=t.querySelectorAll(".materials__button");t.querySelectorAll(".tabs");for(let c=0;c<a.length;c++)a[c].addEventListener("click",()=>{a[c].classList.contains("materials__button--active")?(a[c].classList.remove("materials__button--active"),e[c].classList.remove("card--active")):(t.querySelector(".materials__button--active")&&(t.querySelector(".materials__button--active").classList.toggle("materials__button--active"),t.querySelector(".card--active").classList.toggle("card--active")),a[c].classList.toggle("materials__button--active"),e[c].classList.toggle("card--active"))});new Swiper(".swiper",{direction:"horizontal"});
//# sourceMappingURL=index.f95a0938.js.map
