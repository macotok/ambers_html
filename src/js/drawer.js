import $ from 'jquery';

export default class Drawer {
  constructor() {
    this.$drawerMenu = $('.fn-drawer');
    this.$targetElement = $('.fn-drawerAnimation');
    this.$openDrawer = $('.fn-open-drawer');
    this.$closeDrawer = $('.fn-close-drawer');
    this.$animationElementLength = this.$drawerMenu.find(this.$targetElement).length;
    this.delaySpeed = 100;
    this.$body = $('body');
  }
  openDrawer() {
    this.$openDrawer.on('click', () => {
      this.$drawerMenu.removeClass('is-hide');
      this.$drawerMenu.addClass('is-show');
      this.eventAnimation();
      this.$body.addClass('noScroll');
    });
    this.closeDrawer();
  }
  eventAnimation() {
    for (let i=0; i < this.$animationElementLength; i += 1) {
      this.$drawerMenu.find(this.$targetElement).eq(i).delay(i * this.delaySpeed).queue(function(){
        $(this).addClass('active').dequeue();
      });
    }
  }
  closeDrawer() {
    this.$closeDrawer.on('click', () => {
      this.$drawerMenu.removeClass('is-show');
      this.$drawerMenu.addClass('is-hide');
      this.$body.removeClass('noScroll');
      this.defaultAnimation();
    });
  }
  defaultAnimation() {
    for (let i=0; i < this.$animationElementLength; i += 1) {
      this.$drawerMenu.find(this.$targetElement).eq(i).queue(function(){
        $(this).removeClass('active').dequeue();
      });
    }
  }
}
