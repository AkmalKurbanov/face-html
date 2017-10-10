

'use strict';

$(document).ready(function () {

  //E-mail Ajax Send
  $('form').submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function () {
      $.magnificPopup.open({
        items: {
          src: '#submite',
          type: 'inline'
        },
        midClick: true,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
      });
    });
    return false;
  });

  $('.popup-content').magnificPopup({
    type: 'inline'
  });

  $('#js-nav a').on('click', function (e) {

    e.preventDefault();

    var currentBlock = $(this).attr('href'),
        currentBlockOffset = $(currentBlock).offset().top;

    $('html, body').animate({
      scrollTop: currentBlockOffset - 0
    }, 500);
  });
  //E-mail Ajax Send


  // input mask
  $('.js-phone').mask('+7 (999) 999-99-99');
  // input mask

  // owl-carousel
  $('.js-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    mouseDrag: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });

  $('.js-slider-second').owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    items: 3,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  // owl-carousel

  $(".input").focusin(function () {
    $(this).find("span").animate({ "opacity": "0" }, 200);
  });

  $(".input").focusout(function () {
    $(this).find("span").animate({ "opacity": "1" }, 300);
  });

  $(".login").submit(function () {
    $(this).find(".submit i").removeAttr('class').addClass("fa fa-check").css({ "color": "#fff" });
    $(".submit").css({ "background": "#2ecc71", "border-color": "#2ecc71" });
    $(".feedback").show().animate({ "opacity": "1", "bottom": "-80px" }, 400);
    $("input").css({ "border-color": "#2ecc71" });
    return false;
  });

  (function ($) {
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').click(function (g) {
      var tab = $(this).closest('.tab'),
          index = $(this).closest('li').index();

      tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');

      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

      g.preventDefault();
    });
  })(jQuery);

  $(document).ready(function () {

    $(".selLabel").click(function () {
      $('.dropdown').toggleClass('active');
    });

    $(".dropdown-list li").click(function () {
      $('.selLabel').text($(this).text());
      $('.dropdown').removeClass('active');
      $('.selected-item p span').text($('.selLabel').text());
    });
  });

  $('.header__wrap--menu ul').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    navbar: {
      title: '<img src=\'images/logo.png\' alt=\'\' />'
    },
    extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black'],
    offCanvas: {
      'position': 'right'
    },
    counters: true
  });

  var $icon = $('.js-navtrigger');
  var API = $menu.data('mmenu');

  $icon.on('click', function () {
    API.open();
  });

  API.bind('open:start', function ($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  API.bind('close:start', function ($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  if (Modernizr.mq('(max-width: 992px)')) {
    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
      API.close();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 115
          }, 1000);
          return false;
        }
      }
    });
  } else {
    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 73
          }, 1000);
          return false;
        }
      }
    });
  }

  if (Modernizr.mq('(max-width: 767px)')) {
    var init = function init(data) {
      $('#map').html('');
      myMap = new ymaps.Map('map', {
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
        center: [55.755814, 37.617635],
        behaviors: ['drag'],
        zoom: 17
      });

      if (!data.type) {
        myPlacemark = new ymaps.Placemark([55.755814, 37.617635], {
          balloonContentHeader: 'KidsLab',
          balloonContentBody: 'Москва, ул. 2-я Мякининская, дом 9'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'images/marker.png',
          iconImageSize: [35, 55]
        });
        myMap.geoObjects.add(myPlacemark);
        return true;
      };
    };

    var myMap, myPlacemark;

    ymaps.ready(init);
    ;
  } else {
    var _init = function _init(data) {
      $('#map').html('');
      myMap = new ymaps.Map('map', {
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
        center: [55.755814, 37.617635],
        behaviors: ['drag'],
        zoom: 17
      });

      if (!data.type) {
        myPlacemark = new ymaps.Placemark([55.755814, 37.617635], {
          balloonContentHeader: 'InterFace',
          balloonContentBody: 'Москва ул.Кожевническая 10с1'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'images/marker.png',
          iconImageSize: [35, 55]
        });
        myMap.geoObjects.add(myPlacemark);
        return true;
      };
    };

    var myMap, myPlacemark;

    ymaps.ready(_init);
    ;
  }
});