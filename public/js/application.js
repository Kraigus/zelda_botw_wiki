const $cardContainer = document.querySelector('#post_container_wrapper');
const $profile = document.querySelector('#profile');
const $indexContainer = document.querySelector('#index-container');
const $preloader = document.querySelector('.preloader');
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 10,
  on: {
    init: function () {
      console.log('swiper initialized');
      setTimeout(() => {
        $cardContainer?.classList.remove('opacity');
        $profile?.classList.remove('opacity');
        $indexContainer?.classList.remove('opacity');
        $preloader.remove();
      }, 100);
    },
  },
});

console.log(swiper);
