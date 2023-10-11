import * as flsFunctions from './modules/functions.js';
import Swiper from 'swiper/bundle';
// import Swiper styles
document.addEventListener("DOMContentLoaded", function () {
  
  flsFunctions.isWebp();

  
  const f = new Swiper(".swiper", {
    loop: !0,
    pagination: {
      el: ".swiper-pagination",
      clickable: !0,
      renderBullet: function (n, t) {
        return '<span class="' + t + '">' + (n + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: !0,
    },
  });
});
