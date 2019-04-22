import $ from 'jquery';

export default class ElementAnimation {
  constructor() {
    this.$targetElement = $('.fn-animation');
    this.$targetBlock = $('.fn-animation-block');
    this.targetBlockPosition = [];
    this.scrollEventFlag = true;
    this.observeTime = 200;
    this.controlPosition = 500;
    this.delaySpeed = 200;
  }
  getPositionToBlock() {
    for (let i = 0; i < this.$targetBlock.length; i += 1) {
      this.targetBlockPosition.push(this.$targetBlock.eq(i).offset().top);
    }
    this.eventScroll();
    this.resizeWindow();
  }
  eventScroll() {
    window.addEventListener('scroll', () => {
      if (this.scrollEventFlag) {
        this.scrollEventFlag = false;
        setTimeout(() => {
          const scrollTopPosition = $(window).scrollTop();
          this.checkIsAnimation(scrollTopPosition);
          this.scrollEventFlag = true;
        }, this.observeTime);
      }
    }, false);
  };
  checkIsAnimation(scrollTopPosition) {
    this.targetBlockPosition.filter((t, index) => {
      if (t <= scrollTopPosition + this.controlPosition) {
        this.$targetBlock.eq(index).addClass('active');
        this.eventAnimation(this.$targetBlock.eq(index));
      }
      return false;
    });
  }
  eventAnimation(targetBlock) {
    const len = targetBlock.find(this.$targetElement).length;
    for (let i=0; i < len; i += 1) {
      targetBlock.find(this.$targetElement).eq(i).delay(i * this.delaySpeed).queue(function(){
        $(this).addClass('active').dequeue();
      });
    }
  }
  resizeWindow() {
    window.addEventListener('resize', () => {
      clearTimeout(this.observeResize);
      this.observeResize = setTimeout(() => {
        this.targetBlockPosition = [];
        this.getPositionToBlock();
      }, this.observeTime);
    }, false);
  }
}
