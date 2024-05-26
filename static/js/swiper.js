var swiper = new Swiper(".article-swiper-container", {
  slidesPerView: 3,
  direction: 'vertical',
  breakpoints: {
    993: {
      slidesPerView: 3,
      spaceBetween: 24,
      direction: 'horizontal',
      pagination: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          console.log('className', className)
          return '<span class="' + className + '">' + "</span>";
        }
      }
    }
  },
});