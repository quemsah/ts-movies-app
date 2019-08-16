$(function () {
  $('#dark-mode').on('click', function (e) {

    e.preventDefault();
    $('h4, button').not('.check').toggleClass('text-white');
    $('.list-panel a').toggleClass('dark-grey-text');
    $('.card .card-profile').toggleClass('dark-card-admin');
    $('body, .navbar').toggleClass('white-skin navy-blue-skin');
    $(this).toggleClass('white text-dark btn-outline-black');
    $('body').toggleClass('dark-bg-admin');
    $('h6, .card, p, td, th, i, li a, h2, h4, h5, input, label').not(
      '#slide-out i, #slide-out a, .dropdown-item i, .dropdown-item').toggleClass('text-white');
    $('.btn-dash').toggleClass('grey blue').toggleClass('lighten-3 darken-3');
    $('.gradient-card-header').toggleClass('white black lighten-4');
    $('.list-panel a').toggleClass('navy-blue-bg-a text-white').toggleClass('list-group-border');
    $('.card, .card-rating').toggleClass('dark-card-admin');
    $('.card-rating a').toggleClass('text-white');
    $('#dark-mode').toggleClass('dark-card-admin').removeClass('text-dark');

  });
});