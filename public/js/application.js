const $cardContainer = document.querySelector('#post_container_wrapper');
const $profile = document.querySelector('#profile');
const $indexContainer = document.querySelector('#index-container')
console.log($profile);
console.log($cardContainer);
console.log($indexContainer);
const swiper = new Swiper('.swiper-container', {
  // Optional parameterse
  slidesPerView: 4,
  spaceBetween: 10,
  on: {
    init: function () {
      console.log('swiper initialized');
      setTimeout(() => {
        $cardContainer?.classList.remove('opacity');
        $profile?.classList.remove('opacity');
        $indexContainer?.classList.remove('opacity');
      }, 100);
    },
  },
});

console.log(swiper);
