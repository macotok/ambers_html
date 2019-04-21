import drawer from './drawer';
import funcyboxFunc from './fancybox';
import googleMap from './googleMap';
import pageLink from './pageLink';
import slickFunc from './slick';
import smartRollover from './smartRollover';

window.onload = () => {
  drawer();
  funcyboxFunc();
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
