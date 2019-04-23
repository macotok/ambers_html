export default class Opening {
  constructor() {
    this.$targetElement = $('.m-opening-01');
    this.$animeElement01 = $('.fn-opening-animation-01');
  }
  event() {
    setTimeout(() => {
      this.$targetElement.find(this.$animeElement01).addClass('active');
    }, 500);

    setTimeout(() => {
      this.$targetElement.addClass('fadeOut');
    }, 3000);

    setTimeout(() => {
      this.$targetElement.remove();
    }, 3500);
  }
}
