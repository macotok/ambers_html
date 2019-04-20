export default  function smartRollover() {
  if (document.getElementsByTagName) {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i += 1) {
      if (images[i].getAttribute('src').match('_off.')) {
        images[i].onmouseover = function() {
          this.setAttribute('src', this.getAttribute('src').replace('_off.', '_on.'));
        }
        images[i].onmouseout = function() {
          this.setAttribute('src', this.getAttribute('src').replace('_on.', '_off.'));
        }
      }
    }
  }
}
