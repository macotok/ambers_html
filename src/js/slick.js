import $ from 'jquery';
import slick from 'slick-carousel';

export default function slickFunc() {
  $('.fn-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 2000
  });
  $('.fn-slider').slick('slickPause');
}
