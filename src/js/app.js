import $ from 'jquery';
window.jQuery = $;
import slick from 'slick-carousel';
require("@fancyapps/fancybox");

window.onload = () => {
  const pageLInk = () => {
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
  };
  $('.fn-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 2000
  });
  $('.fn-fancybox').fancybox({
    loop: true,
  });
  pageLInk();
};
