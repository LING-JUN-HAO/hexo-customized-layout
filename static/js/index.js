$(function() {
  const currentPath = window.location.pathname.split("/").pop();
  $('.navbar-list .navbar-link').each(function() {
      const linkPath = $(this).attr('href').split("/").pop();
      if (currentPath === linkPath) {
          $(this).parent().addClass('active');
      }
  });
});

$('.navbar-btn ').click(function () {
  const $this = $(this);
  $this.toggleClass('active');
  $('.menu, .closure, .navbar-list').toggleClass('close active');

  if ($('.navbar-list').hasClass('active')) {
    overlayOpen();
  } else {
    overlayClose();
  }
})

setupClickHandlers('.pagination', '.page', false);
setupClickHandlers('.menu-group', '.menu-item', true);

function overlayOpen () {
  $('body').addClass('overlay');
}

function overlayClose () {
  $('body').removeClass('overlay');
}

function setupClickHandlers(containerSelector, itemSelector, filterType) {
  $(containerSelector).on('click', itemSelector + ' a', function(e) {
    e.preventDefault();
  });

  $(containerSelector).on('click', itemSelector, function() {
    $(containerSelector + ' ' + itemSelector).removeClass('active');
    $(this).addClass('active');
    if(filterType){
      const filter = $(this).data('filter');
      filterArticles(filter)
    };
  });
}

function filterArticles(filter = '全部文章') {
  if (filter === '全部文章' || filter === '平面設計') {
      $('.article-content-group .card').show();
  } else {
      $('.article-content-group .card').each(function() {
          const tag = $(this).find('.tag').text();
          if (tag === filter) {
              $(this).show();
          } else {
              $(this).hide();
          }
      });
  }
}
