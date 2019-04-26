import ElementAnimation from './ElementAnimation';
import imagesLoaded from 'imagesloaded';
import Opening from './Opening';

export default class ImageLoading {
  constructor() {
    this.imageLoad = imagesLoaded('body');
    this.imagesLength = this.imageLoad.images.length;
    this.imageLoaded = 0;
    this.loadProgress = this.loadProgress.bind(this);
    this.opening = new Opening();
    this.elementAnimation = new ElementAnimation();
  }
  loadProgress() {
    this.imageLoad.on('progress', () => {
      return new Promise((resolve) => {
        this.imageLoaded += 1;
        resolve(this.imageLoaded);
      }).then((value) => {
        if (this.imagesLength <= value) {
          this.opening.event();
          this.elementAnimation.getPositionToBlock();
        }
      });
    });
  }
}
