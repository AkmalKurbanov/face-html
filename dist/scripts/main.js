'use strict';

$(document).ready(function () {

  var tabContainers = $('div.tabs > div'); // получаем массив контейнеров
  tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
  // далее обрабатывается клик по вкладке
  $('div.tabs ul.tabNavigation a').click(function () {
    tabContainers.hide(); // прячем все табы
    tabContainers.filter(this.hash).show(); // показываем содержимое текущего
    $('div.tabs ul.tabNavigation a').removeClass('selected'); // у всех убираем класс 'selected'
    $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
    return false;
  }).filter(':first').click();

  // scroll
  // $('a[href^="#"]').click(function(){
  //   var target = $(this).attr('href');
  // $('html, body').animate({scrollTop: $(target).offset().top}, 2000);//800 - длительность скроллинга в мс
  // return false; 
  // });  
  // scroll


  // steps tabs

  // steps tabs


  // rating stars
  var $star_rating = $('.star-rating .fa');

  var SetRatingStar = function SetRatingStar() {
    return $star_rating.each(function () {
      if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
        return $(this).removeClass('fa-star-o').addClass('fa-star');
      } else {
        return $(this).removeClass('fa-star').addClass('fa-star-o');
      }
    });
  };

  $star_rating.on('click', function () {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
  });

  SetRatingStar();
  $(document).ready(function () {});
  // rating stars

  //E-mail Ajax Send
  $('form').submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    });
    // .done(function() {
    //   $.magnificPopup.open({
    //     items: {
    //       src: '#submite',
    //       type: 'inline'
    //     },
    //     midClick: true,
    //     closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
    //   });
    // });
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
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000]);
  });
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay');
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

  $('.js-blog-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
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

  // form animation
  $(".input").focusin(function () {
    $(this).find("span").animate({ "opacity": "0" }, 200);
  });

  $(".input").focusout(function () {
    $(this).find("span").animate({ "opacity": "1" }, 300);
  });

  $(".login").submit(function () {
    $(this).find(".submit i").removeAttr('class').addClass("fa fa-check").css({ "color": "#fff" });
    $("form .submit").css({ "background": "#2ecc71", "border-color": "#2ecc71" });
    $(".feedback").show().animate({ "opacity": "1", "bottom": " -5px" }, 400);
    $("input").css({ "border-color": "#2ecc71" });
    return false;
  });
  // form animation

  // drop down
  // $(document).ready(function() {

  //   $(".selLabel").click(function () {
  //     $('.dropdown').toggleClass('active');
  //   });

  //   $(".dropdown-list li").click(function() {
  //     $('.selLabel').text($(this).text());
  //     $('.dropdown').removeClass('active');
  //     $('.selected-item p span').text($('.selLabel').text());
  //   });

  // });
  /*
  Reference: http://jsfiddle.net/BB3JK/47/
  */

  $('select').each(function () {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
      'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function () {
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
    });

    $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
  // drop down

  // form
  var labels = document.querySelectorAll('label');
  var getInput = function getInput(val) {
    return document.getElementById('star_' + val);
  };

  labels.forEach(function (label) {
    label.addEventListener('touchstart', function (e) {
      var targetInput = getInput(e.target.control.value);
      targetInput.checked = true;
    });

    label.addEventListener('touchmove', function (e) {
      var touch = e.touches[0];
      var targetLabel = document.elementFromPoint(touch.clientX, touch.clientY);

      if (!targetLabel || !targetLabel.htmlFor) {
        return;
      }

      var targetInput = document.getElementById(targetLabel.htmlFor);
      targetInput.checked = true;
    });
  });
  // form


  // mmenu
  $('.header__menu-nav ul').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    navbar: {
      title: '<img src=\'images/logo-mmenu.png\' alt=\'\' />'
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

  if (Modernizr.mq('(max-width: 1199px)')) {
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

  // mmenu

  // masonry
  $('.elements-gride').masonry({
    // options
    itemSelector: '.element-item',
    columnWidth: 3000
  });
  // masonry


  // tabs-steps


  // tabs-steps

});