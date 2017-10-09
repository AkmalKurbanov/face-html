"use strict";

$(function () {

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
    nav: false,
    items: 1,
    mouseDrag: false
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

  // mmenu
  $('.header__menu-nav ul').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    navbar: {
      title: 'Меню'
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

  if (Modernizr.mq('(max-width: 767px)')) {
    var init = function init(data) {
      $('#map').html('');
      myMap = new ymaps.Map('map', {
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
        center: [59.925655, 30.312032],
        behaviors: ['drag'],
        zoom: 17
      });

      if (!data.type) {
        myPlacemark = new ymaps.Placemark([59.925655, 30.312032], {
          balloonContentHeader: '',
          balloonContentBody: ''

        });
        myMap.geoObjects.add(myPlacemark);
        return true;
      };
    };

    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
      API.close();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return true;
        }
      }
    });
    var myMap, myPlacemark;

    ymaps.ready(init);

    ;
  } else {
    var _init = function _init(data) {
      $('#map').html('');
      myMap = new ymaps.Map('map', {
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
        center: [59.925655, 30.312032],
        behaviors: ['drag'],
        zoom: 17
      });

      if (!data.type) {
        myPlacemark = new ymaps.Placemark([59.925655, 30.312032], {
          balloonContentHeader: '',
          balloonContentBody: 'г. Санкт-Петербург, м. Садовая, наб. канала Грибоедова, 70'
        });
        myMap.geoObjects.add(myPlacemark);
        return true;
      };
    };

    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return true;
        }
      }
    });
    var myMap, myPlacemark;

    ymaps.ready(_init);

    ;
  }
  // mmenu

});