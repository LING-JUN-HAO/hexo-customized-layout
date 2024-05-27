$('.navbar-btn ').click(function () {
  $('.navbar-btn').toggleClass('active');
  $('.menu').toggleClass('close');
  $('.closure').toggleClass('close');
  $('.nav-list').toggleClass('active');

  if ($('.nav-list').hasClass('active')) {
    $('body').addClass('overlay');
  } else {
    $('body').removeClass('overlay');
  }
})