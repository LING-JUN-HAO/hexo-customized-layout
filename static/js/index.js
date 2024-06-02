$('.navbar-btn ').click(function () {
  $('.navbar-btn').toggleClass('active');
  $('.menu').toggleClass('close');
  $('.closure').toggleClass('close');
  $('.nav-list').toggleClass('active');

  if ($('.nav-list').hasClass('active')) {
    overlayOpen()
  } else {
    overlayClose()
  }
})

$('.pagination .page a').click(function(e){
  e.preventDefault();
  $('.pagination .page').removeClass('active');
  $(this).parent().addClass('active');
});

function overlayOpen () {
  $('body').addClass('overlay');
}

function overlayClose () {
  $('body').removeClass('overlay');
}