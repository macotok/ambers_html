import $ from 'jquery';
require("@fancyapps/fancybox");

export default function fancyboxFunc() {
  $('.fn-fancybox').fancybox({
    loop: true,
  });
}
