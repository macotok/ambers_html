import $ from 'jquery';
import slick from 'slick-carousel';

export default class Opening {
  constructor() {
    this.$targetElement = $('.m-opening-01');
    this.$animeElement01 = $('.fn-opening-animation-01');
    this.$body = $('body');
  }
  event() {
    this.$body.addClass('noScroll');
    setTimeout(() => {
      this.$targetElement.find(this.$animeElement01).addClass('active');
    }, 500);

    setTimeout(() => {
      this.$targetElement.addClass('fadeOut');
    }, 3500);

    setTimeout(() => {
      this.$targetElement.remove();
      $('.fn-slider').slick('slickPlay');
      this.$body.removeClass('noScroll');
    }, 4500);
  }
}