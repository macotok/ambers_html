import $ from 'jquery';
import slick from 'slick-carousel';

export default class Opening {
  constructor() {
    this.$targetElement = $('.m-opening-01');
    this.$openingElement01 = $('.fn-opening-animation-01');
    this.$openingImage01 = $('.fn-opening-img-01');
    this.$openingImage02 = $('.fn-opening-img-02');
    this.$openingLoader = $('.fn-opening-loader');
    this.$openingLogo = $('.fn-opening-logo');
    this.$slick = $('.fn-slider');
    this.$body = $('body');
    this.fadeIn = 'fadeIn';
    this.fadeOut = 'fadeOut';
  }
  event() {
    this.$body.addClass('noScroll');
    this.$targetElement.find(this.$openingLoader).addClass(this.fadeOut);

    setTimeout(() => {
      this.$targetElement.find(this.$openingLogo).addClass(this.fadeIn);
    }, 500);

    setTimeout(() => {
      this.$targetElement.find(this.$openingElement01).addClass('active');
    }, 1200);

    setTimeout(() => {
      this.$targetElement.find(this.$openingImage01).addClass(this.fadeIn);
    }, 2000);

    setTimeout(() => {
      this.$targetElement.find(this.$openingImage01).addClass(this.fadeOut);
    }, 4000);

    setTimeout(() => {
      this.$targetElement.find(this.$openingImage02).addClass(this.fadeIn);
    }, 4100);

    setTimeout(() => {
      this.$slick.css('max-height', $(window).outerHeight());
      this.$targetElement.addClass('fadeOut');
      $('body,html').animate({ scrollTop: 0 }, 0);
    }, 6000);

    setTimeout(() => {
      this.$targetElement.remove();
      this.$slick.slick('slickPlay');
      this.$body.removeClass('noScroll');
    }, 7000);
  }
}
