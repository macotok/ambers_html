import $ from 'jquery';

export default function pageLink() {
  $('a[href^="#"]').on('click', function() {
    const speed = 1000;
    const href = $(this).attr('href');
    const target = $(href === '#' || href === '' ? 'html' : href);
    const position = target.offset().top - $('.m-header-01').height();
    $('body, html').animate({
      scrollTop: position,
    }, speed, 'swing');
    return false;
  });
}
