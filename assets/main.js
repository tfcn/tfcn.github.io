$(document).ready(function () {

  // Remove line break.
  $('.post-content > p').each(function () {
    $this = $(this);
    $this.text($this.text().replace(
          /([\u4E00-\u9FA5\uF900-\uFA2D])\n([\u4E00-\u9FA5\uF900-\uFA2D])/, '$1$2'));
  });

  // Warning dialog.
  $warning = $('#adult-warning');
  $warning.find('.enter').click(function () {
    $warning.fadeOut();
    Cookies.set('show-adult', true, { expires: 7, path: '/story/adult/' });
  });
  $warning.find('.leave').click(function () {
    history.back();
  });
  if (Cookies.get('show-adult') == undefined) {
    $warning.css('display', 'block');
  }


});
