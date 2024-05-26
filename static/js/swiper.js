var swiper = new Swiper(".article-swiper-container", {
  slidesPerView: 3,
  direction: 'vertical',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      console.log('className', className)
      return '<span class="' + className + '">' + "</span>";
    },
  },
  breakpoints: {
    993: {
      slidesPerView: 3,
      spaceBetween: 24,
      direction: 'horizontal',
    }
  },
});