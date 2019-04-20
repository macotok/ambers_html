import $ from 'jquery';
import slick from 'slick-carousel';
require("@fancyapps/fancybox");
import googleMap from './googleMap';
import smartRollover from './smartRollover';

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
google.maps.event.addDomListener(window, 'load', googleMap);
if (window.addEventListener) {
  window.addEventListener('load', smartRollover, false);
}
else if (window.attachEvent) {
  window.attachEvent('onload', smartRollover);
}
