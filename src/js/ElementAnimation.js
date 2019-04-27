import $ from 'jquery';

export default class ElementAnimation {
  constructor() {
    this.$targetElement = $('.fn-animation');
    this.$targetBlocks = $('.fn-animation-block');
    this.$targetHeader = $('.fn-header');
    this.$arrowIcon = $('.fn-arrowIcon');
    this.targetBlockPosition = [];
    this.observeTime = 200;
    this.controlPosition = 800;
    this.delaySpeed = 200;
  }

  /**
   * .fn-animation-blockを定義したブロックの位置を取得
   * ブラウザをリサイズしたときは再度取得
   */
  getPositionToBlock() {
    for (let i = 0; i < this.$targetBlocks.length; i += 1) {
      this.targetBlockPosition.push(this.$targetBlocks.eq(i).offset().top);
    }
    this.eventScroll();
    this.resizeWindow();
  }
  eventScroll() {
    window.addEventListener('scroll', () => { this.scrollFunc() });
  };
  scrollFunc() {
    const scrollTopPosition = $(window).scrollTop();
    this.checkIsAnimation(scrollTopPosition);
    this.headerAnimation(scrollTopPosition);
  }

  /**
   *　各.fn-animation-blockのブロックの位置とスクロール値を比較して、
   * スクロール値が通過したらアニメーション処理を行なう
   */
  checkIsAnimation(scrollTopPosition) {
    this.targetBlockPosition.filter((t, index) => {
      if (t <= scrollTopPosition + this.controlPosition) {
        this.$targetBlocks.eq(index).addClass('active');
        this.eventAnimation(this.$targetBlocks.eq(index));
      }
    });
    return false;
  }

  /**
   * .fn-animationを付けている要素を順々にアニメーション表示
   * @param targetBlock　スクロール値が通過した「.fn-animation-block」
   */
  eventAnimation(targetBlock) {
    const len = targetBlock.find(this.$targetElement).length;
    for (let i=0; i < len; i += 1) {
      targetBlock.find(this.$targetElement).eq(i).delay(i * this.delaySpeed).queue(function(){
        $(this).addClass('active').dequeue();
      });
    }
  }

  /**
   * ページをスクロールした瞬間にヘッダーメニューを表示させる
   * @param scrollTopPosition
   */
  headerAnimation(scrollTopPosition) {
    if (0 < scrollTopPosition) {
      this.$targetHeader.addClass('active');
      this.$arrowIcon.addClass('fadeOut')
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
