var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
  });




///////////// tabs
$('.tab').on('click', function(e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active')
})

$(".js-range-slider").ionRangeSlider();

$(function() {
    $('.checkbox, .radio, .select').styler();
});

if (document.documentElement.clientWidth < 700) {
    ////spoller
    $(".footer__title").click(function(event) {
        if ($('.footer-top').hasClass('one')) {
            $('.footer-top__link-wrapper').not($(this).next()).slideUp(300)
        }
        $(this).next().slideToggle(300);
    });
}

$(".sorting__button-open").click(function(event) {
    $(".filter__filtration").slideToggle(300);
});




$(".sorting__category").click(function() {
    $(".sorting__category").removeClass('active')
    $(this).addClass('active')
})

$(".jq-selectbox").click(function() {
    $(".sorting__category").removeClass('active')
})



