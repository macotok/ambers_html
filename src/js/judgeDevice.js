import $ from 'jquery';

export default function judgeDevice() {
  const ua = navigator.userAgent;
  const $body = $('body');
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    $body.addClass('is-spDevice');
    return false;
  } else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
    $body.addClass('is-tabletDevice');
    return false;
  } else {
    $body.addClass('is-pcDevice');
    return false;
  }
}
