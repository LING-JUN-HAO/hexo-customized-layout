var swiper = new Swiper(".article-swiper-container", {
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  breakpoints: {
    376: {
      slidesPerView: 3,
      spaceBetween: 24,
      direction: 'horizontal', // 恢复水平布局
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
    },
    375: {
      slidesPerView: 3,
      direction: 'vertical',
      pagination: false,
    },
  },
});