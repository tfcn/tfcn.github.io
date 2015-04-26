$(document).ready(function () {

  // Remove line break.
  $('.post-content > p').each(function () {
    $this = $(this);
    $this.text($this.text().replace(
          /[\u4E00-\u9FA5\uF900-\uFA2D]\n[\u4E00-\u9FA5\uF900-\uFA2D]/, ''));
  });
});
