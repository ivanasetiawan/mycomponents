$(document).ready(function() {
  $('.accordion').find('.question').click(function(){
    $(this).parents('li').toggleClass('show');
  });
  $('.show-all').click(function(){
    $(this).text(function(i, v) {
      return v === 'Show all' ? 'Hide all' : 'Show all'
    });
    $('.accordion').find('li').toggleClass('show');
  });
});
