$('document').ready(function() {
  $('#font-slider').on('change', function () {
      var v = $(this).val()/10;
      $('body').css('font-size', v + 'rem')
      $('output').html(v);
  });
});
