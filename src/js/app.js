import Drawer from './Drawer';
import funcyboxFunc from './fancybox';
import ImageLoading from './ImageLoading';
import googleMap from './googleMap';
import judgeDevice from './judgeDevice';
import pageLink from './pageLink';
import slickFunc from './slick';
import smartRollover from './smartRollover';

window.onload = () => {
  const drawer = new Drawer();
  drawer.openDrawer();
  funcyboxFunc();
  const imageLoading = new ImageLoading();
  imageLoading.loadProgress();
  judgeDevice();
  pageLink();
  slickFunc();
};
google.maps.event.addDomListener(window, 'load', googleMap);
if (window.addEventListener) {
  window.addEventListener('load', smartRollover, false);
}
else if (window.attachEvent) {
  window.attachEvent('onload', smartRollover);
}
