export default function drawer() {
  const $drawerMenu = $('.fn-drawer');
  $('.fn-open-drawer').on('click', () => {
    $drawerMenu.removeClass('is-hide');
    $drawerMenu.addClass('is-show');
  });
  $('.fn-close-drawer').on('click', () => {
    $drawerMenu.removeClass('is-show');
    $drawerMenu.addClass('is-hide');
  });
  $('.test').addClass('add')
}
