$(document).ready(function() {
  const currentPath = window.location.pathname.split("/").pop();;
  $('.nav-list .nav-link').each(function() {
      const linkPath = $(this).attr('href').split("/").pop();;
      if (currentPath === linkPath) {
          $(this).parent().addClass('active');
      }
  });
});

$('.navbar-btn ').click(function () {
  $('.navbar-btn').toggleClass('active');
  $('.menu').toggleClass('close');
  $('.closure').toggleClass('close');
  $('.nav-list').toggleClass('active');

  if ($('.nav-list').hasClass('active')) {
    overlayOpen();
  } else {
    overlayClose();
  }
})

$('.nav-list .nav-item a').click(function(e){
  $('.nav-list .nav-item').removeClass('active');
  $(this).parent().addClass('active');
});

function overlayOpen () {
  $('body').addClass('overlay');
}

function overlayClose () {
  $('body').removeClass('overlay');
}