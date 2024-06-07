$(function() {
  const currentPath = window.location.pathname.split("/").pop();
  $('.nav-list .nav-link').each(function() {
      const linkPath = $(this).attr('href').split("/").pop();
      if (currentPath === linkPath) {
          $(this).parent().addClass('active');
      }
  });
});

$('.navbar-btn ').click(function () {
  const $this = $(this);
  $this.toggleClass('active');
  $('.menu, .closure, .nav-list').toggleClass('close active');

  if ($('.nav-list').hasClass('active')) {
    overlayOpen();
  } else {
    overlayClose();
  }
})

$('.pagination .page  a').click(function(e){
  e.preventDefault()
  $('.pagination .page').removeClass('active');
  $(this).parent().addClass('active');
});

$('.menu-group .menu-item a').click(function(e){
  e.preventDefault()
  $('.menu-group .menu-item').removeClass('active');
  $(this).parent().addClass('active');
});

function overlayOpen () {
  $('body').addClass('overlay');
}

function overlayClose () {
  $('body').removeClass('overlay');
}