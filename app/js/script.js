$(function(){
    $('.js-main-slider').slick({
        arrows: false,
        dots: false,
        fade: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 10000
    });
    $('.js-slider-route, .js-slider-how, .js-slider-rules').slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 500
    });
    $('.js-slider-features').slick({
        arrows: false,
        dots: false,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 10000
    });

    $('.js-goto-slider').on('click tap', function(){
      let slide = $(this).attr('data-slide'),
          parent = $(this).attr('data-parent');
      $('.' + parent).slick('slickGoTo', parseInt(slide));
      if (parent == 'js-main-slider') {
        $('.js-toggle-slide').text(parseInt(slide) + 1);
      }
    });
    $('.js-show-block').on('click tap', function(){
      let page_id = $(this).attr('data-tab');
      $('.page__feature').attr('data-status', '');
      $('.page__feature[data-block="' + page_id + '"]').attr('data-status', 'active');
    });
});
