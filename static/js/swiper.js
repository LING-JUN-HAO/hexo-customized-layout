var swiper = new Swiper(".article-swiper-container", {
  grid: {
    rows: 3,
  },
  slidesPerView: 3,
  direction: 'vertical',
  breakpoints: {
    993: {
      grid: {
        rows: 1,
      },
      slidesPerView: 3,
      spaceBetween: 24,
      direction: 'horizontal',
      pagination: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        }
      }
    }
  },
});