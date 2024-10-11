/*
 * All Scripts Used in this Roof Theme
 * Author & Copyright: VictorThemes
 * URL: http://themeforest.net/user/VictorThemes
 */

jQuery(document).ready(function($) {
  "use strict";
  //Roof Sub Menu Hover Script
  $('.dropdown-submenu .dropdown-toggle').on('click', function(e) {
    $(this).next('ul').slideToggle();
    e.preventDefault();
  });

  //Roof Stop Propagation Script
  $(document).on('click', 'ul.dropdown-menu', function (e) {
    e.stopPropagation();
  });

  // Layout class for footer wpml
  if($("div").hasClass("layout-boxed"))
  {
    $('div.wpml-ls-statics-footer').addClass("layout-boxed");
  }
  else
  {
    $('div.wpml-ls-statics-footer').removeClass("layout-boxed");
  }

  //Roof Dropdown Menu Script
  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
  }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
  });

  // Testimonial style one indicator active
  $('.carousel-indicators li:first').addClass('active');

  //Roof Sticky Header Script

  $('.roof-header-sticky').sticky({topSpacing:0});
  if (screen.width >= 768) {
    $('.sticky-wrapper').css('top',$('.roof-top-bar').height());
  }
  if ($('.roof-header-sticky').hasClass('header-style-three')) {
    $('.sticky-wrapper').addClass('sticky-style-two');
  }
  $(window).load(function() {
    if (screen.width <= 991) {
      $('.roof-menu').removeClass('roof-header-sticky');
      $('.roof-style-one').addClass('roof-header-sticky');
    }
  });

// Responsive Menu
 $(document).ready(function () {
    var responsiveSize = ($('header nav').data("responsive-size") !== undefined) ? $('header nav').data("responsive-size") : 992;
    $('header nav').meanmenu({
     meanScreenWidth: responsiveSize,
     meanMenuContainer: '.roof-navigation',
     meanMenuOpen: '<span></span><span></span><span></span>',
     meanMenuClose: '<span></span><span></span>',
     meanExpand: '',
     meanContract: '',
    });
 });

  // Accordion Active Class
  $('.roof-questions .panel-collapse.in').prev().addClass('accordion-active');
  $('.roof-questions').on('show.bs.collapse', function(e) {
    $(e.target).prev('.panel-heading').addClass('accordion-active');
  }).on('hide.bs.collapse', function(e) {
    $(e.target).prev('.panel-heading').removeClass('accordion-active');
  });

    // Accordion Active Only One At a Time.
  $('.collapse-others').each(function() {
    var $this = $(this);
    $('.collapse', $this).on('show.bs.collapse', function (e) {
      var all = $this.find('.collapse');
      var actives = $this.find('.collapsing, .collapse.in');
      all.each(function (index, element) {
        $(element).collapse('hide');
      })
      actives.each(function (index, element) {
        $(element).collapse('show');
      })
    });
  });

  //Roof Toggle Script
  $('.roof-toggle').on('click', function () {
    $(this).toggleClass('active');
    $('.roof-menu').slideToggle();
  });

  //Roof Slick Horizontal Slider Script
  $(window).load(function() {
  $('.slick-horizontal').each( function() {
    var $slickCarousel = $(this);
    var $slickItems = ($slickCarousel.data("items") !== undefined) ? $slickCarousel.data("items") : 8;
    var $slickDesktop = ($slickCarousel.data("desktop") !== undefined) ? $slickCarousel.data("desktop") : 5;
    var $slickLaptop = ($slickCarousel.data("laptop") !== undefined) ? $slickCarousel.data("laptop") : 3;
    var $slickTablet = ($slickCarousel.data("tablet") !== undefined) ? $slickCarousel.data("tablet") : 2;
    var $slickMobile = ($slickCarousel.data("mobile") !== undefined) ? $slickCarousel.data("mobile") : 1;
    var $slickAutoplay = ($slickCarousel.data("autoplay") !== undefined) ? $slickCarousel.data("autoplay") : false;
    var $slickAutoplayTime = ($slickCarousel.data("autoplay-time") !== undefined) ? $slickCarousel.data("autoplay-time") : 500;
    var $slickLoop = ($slickCarousel.data("loop") !== undefined) ? $slickCarousel.data("loop") : false;
    var $slickDots = ($slickCarousel.data("dots") !== undefined) ? $slickCarousel.data("dots") : false;
    var $slickArrow = ($slickCarousel.data("arrow") !== undefined) ? $slickCarousel.data("arrow") : true;
    var $slickSlides = ($slickCarousel.data("slides-scroll") !== undefined) ? $slickCarousel.data("slides-scroll") : 1;

    $slickCarousel.slick({
      dots: $slickDots,
      arrows: $slickArrow,
      infinite: $slickLoop,
      autoplay: $slickAutoplay,
      speed: $slickAutoplayTime,
      slidesToShow: $slickItems,
      slidesToScroll: $slickSlides,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: $slickDesktop,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: $slickLaptop,
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: $slickTablet,
            speed: 300,
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: $slickMobile,
            speed: 300,
          }
        }
      ]
    });
    // On before slide change
    $slickCarousel.on('setPosition', function(event, slick, currentSlide, nextSlide){
      $( ".slick-dots, .slick-prev, .slick-next" ).wrapAll( "<div class='slick-dots' />");
      $( ".slick-horizontal > .slick-dots" ).insertAfter( $( ".slick-horizontal > .slick-list" ) );
    });
  });
  });

  //Roof Slick Slider Filter Buttons Script
  var filtered = false;
  $('.slick-filter-nav li a').on('click', function () {
    var filtername = $(this).attr('id');
    var currentclass = $(this).attr('class');
    if (filtered === false) {
      $('.slick-horizontal').slick('slickUnfilter');
      $('.slick-horizontal').slick('slickFilter', '.filter-' + filtername);
    } else {
      $('.slick-horizontal').slick('slickUnfilter');
      $('.slick-horizontal').slick('slickFilter', '.filter-' + filtername);
      $('.slick-horizontal').slickGoTo(0);
      filtered = false;
    }
  });
  $('.slick-filter-nav').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'a', function(){
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });

  //Roof Hover Script
  $('.work-list, .expert-item, .link-item, .about-wrap, .mate-list, .plan-item, .blog-link, .products .product').hover (
    function() {
      $(this).addClass('hover');
    },
    function() {
      $(this).removeClass('hover');
    }
  );

  //Roof Menu Hover Script
  $('.dropdown').hover (
    function() {
      $(this).addClass('open');
    },
    function() {
      $(this).removeClass('open');
    }
  );

  //Roof Carousel Slider Script
$(window).load(function() {
  $('.roof-carousel').each( function() {
    var $carousel = $(this);
    var $items = ($carousel.data("items") !== undefined) ? $carousel.data("items") : 2;
    var $items_tablet = ($carousel.data("items-tablet") !== undefined) ? $carousel.data("items-tablet") : 1;
    var $items_mobile_landscape = ($carousel.data("items-mobile-landscape") !== undefined) ? $carousel.data("items-mobile-landscape") : 1;
    var $items_mobile_portrait = ($carousel.data("items-mobile-portrait") !== undefined) ? $carousel.data("items-mobile-portrait") : 1;
    $carousel.owlCarousel ({
      loop : ($carousel.data("loop") !== undefined) ? $carousel.data("loop") : true,
      items : $carousel.data("items"),
      margin : ($carousel.data("margin") !== undefined) ? $carousel.data("margin") : 0,
      dots : ($carousel.data("dots") !== undefined) ? $carousel.data("dots") : false,
      nav : ($carousel.data("nav") !== undefined) ? $carousel.data("nav") : false,
      navText : ["<div class='slider-no-current'><span class='current-no'></span><span class='total-no'></span></div><span class='current-monials'></span>", "<div class='slider-no-next'></div><span class='next-monials'></span>"],
      autoplay : ($carousel.data("autoplay") !== undefined) ? $carousel.data("autoplay") : false,
      autoplayTimeout : ($carousel.data("autoplay-timeout") !== undefined) ? $carousel.data("autoplay-timeout") : 5000,
      animateOut : ($carousel.data("animateout") !== undefined) ? $carousel.data("animateout") : false,
      animateIn : ($carousel.data("animatein") !== undefined) ? $carousel.data("animatein") : false,
      mouseDrag : true,
      autoWidth : ($carousel.data("autowidth") !== undefined) ? $carousel.data("autowidth") : false,
      autoHeight : ($carousel.data("autoheight") !== undefined) ? $carousel.data("autoheight") : true,
      responsiveClass: true,
      responsive : {
        0 : {
          items : $items_mobile_portrait,
        },
        480 : {
          items : $items_mobile_landscape,
        },
        768 : {
          items : $items_tablet,
        },
        960 : {
          items : $items,
        }
      }
    });
    var totLength = $(".owl-dot", $carousel).length;
    $(".total-no", $carousel).html(totLength);
    $(".current-no", $carousel).html(totLength);
    $carousel.owlCarousel();
    $(".current-no", $carousel).html(1);
    $carousel.on('changed.owl.carousel', function(event) {
      var total_items = event.page.count;
      var currentNum = event.page.index + 1;
      $(".total-no", $carousel ).html(total_items);
      $(".current-no", $carousel).html(currentNum);
    });
  });
});

  //Roof Parallax Script
  if (screen.width >= 768) {
    if ( $('.roof-parallax').length > 0 ) {
      $.parallax( {
        scrollProperty: 'scroll',
        verticalOffset: 0,
        horizontalOffset: 0,
        horizontalScrolling: false,
        responsive: true
     });
    }
  }

  //Roof Tooltip Script
  // $('[data-toggle="tooltip"]').tooltip();

//Roof Progressbar Script
$(window).load(function() {
  $('.roof-progressbar').each( function() {
    var $prgs = $(this);
    var $fill_color = ($prgs.data("color") !== undefined) ? $prgs.data("color") : '#eeb313';
    var $empty_color = ($prgs.data("clr") !== undefined) ? $prgs.data("clr") : '#f2f2f2';
    var $duration = ($prgs.data("duration") !== undefined) ? $prgs.data("duration") : '1800';
    var $thick = ($prgs.data("thick") !== undefined) ? $prgs.data("thick") : '4';
    $prgs.waypoint(function() {
      $prgs.circleProgress ({
        size: 150,
        fill: {
          color: $fill_color
        },
        thickness: $thick,
        emptyFill: $empty_color,
        startAngle: 300,
        lineCap: 'squre',
        animation: {
          duration: $duration
        }
      })
      .on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('.progress-counter').text((stepValue * 100).toFixed(0));
      });
    },
    {
      offset: '100%'
    });
  });
});

  //Roof Masonry Script
$(window).load(function() {
  var $grid = $('.roof-masonry').isotope ({
    itemSelector: '.masonry-item',
    layoutMode: 'packery',
  });
  var filterFns = {
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  $('.masonry-filters').on( 'click', 'a', function() {
    var filterValue = $( this ).attr('data-filter');
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({
      filter: filterValue
    });
  });
  $('.masonry-filters').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'a', function() {
      $buttonGroup.find('.active').removeClass('active');
      $(this).addClass('active');
    });
  });
});

  //Roof Counter Script
  $('.counter').counterUp ({
    delay: 1,
    time: 1000
  });

  //Roof Magnific Popup Script
  $('.popup-picture').magnificPopup ({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    closeMarkup:'<div class="mfp-close" title="%title%"></div>',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true,
      arrowMarkup:'<div title="%title%" class="mfp-arrow mfp-arrow-%dir%"></div>',
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });

  //Roof Responsive Tabs Script
  $('.woocommerce-tabs').responsiveTabs ({
    collapsible: false,
    animation: 'fade',
    duration: 0,
    active: 0,
  });

  // Roof apply equal height in children div script
  $(window).load(function() {
    if (screen.width >= 650) {
      var maxheight = 0;
      $('ul.products .product').each(function () {
        maxheight = ($(this).height() > maxheight ? $(this).height() : maxheight);
      });
      $('ul.products .product').height(maxheight);
    }

    var maxheight = 0;
    $('.roof-partners .owl-item').each(function () {
      maxheight = ($(this).height() > maxheight ? $(this).height() : maxheight);
    });
    $('.roof-partners .owl-item').height(maxheight);

    var maxheight = 0;
    $('.mate-list').each(function () {
      maxheight = ($(this).height() > maxheight ? $(this).height() : maxheight);
    });
    $('.mate-list').height(maxheight);
  });

  //Roof Checkbox Script
  $('.payment_method_cod').change(function() {
    var idx = $(this).index()-1;
    $('.payment_box').slideToggle(400);
  });

  //Roof Range Slider Script
  $(window).load(function() {
    $('[type=range]').each( function() {
      var $rangeSlider = $(this);
      var $mainValue = $rangeSlider.attr('value');
      var $minValue = ($rangeSlider.attr('min') !== undefined) ? $rangeSlider.attr('min') : 0;
      var $maxValue = ($rangeSlider.attr('max') !== undefined) ? $rangeSlider.attr('max') : 1500;
      var $stepValue = ($rangeSlider.attr('step') !== undefined) ? $rangeSlider.attr('step') : 1;
      $rangeSlider.slider({
        tooltip_position: 'bottom',
        value: $mainValue,
        min: $minValue,
        max: $maxValue,
        step: $stepValue,
      });
      $rangeSlider.slider();
      $rangeSlider.on('slide', function(slideEvt) {
        $('.square-value > input, .square-value').val(slideEvt.value);
      });
    });
  });

  //Roof Back Top Script
  jQuery('.roof-back-top').hide();
  jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 150) {
        jQuery('.roof-back-top').fadeIn();
      }
      else {
        jQuery('.roof-back-top').fadeOut();
      }
    });
    jQuery('.roof-back-top a').click(function () {
      jQuery('body,html').animate ({
        scrollTop: 0
      }, 1000);
    return false;
    });
  });

  //Roof Swiper Slider Script
  var swipermw = $('.swiper-container.mousewheel').length ? true : false;
  var swiperkb = $('.swiper-container.keyboard').length ? true : false;
  var swipercentered = $('.swiper-container.center').length ? true : false;
  var swiperautoplay = $('.swiper-container').data('autoplay');
  var swiperinterval = $('.swiper-container').data('interval'),
  swiperinterval = swiperinterval ? swiperinterval : 7000;
  swiperautoplay = swiperautoplay ? swiperinterval : false;

  //Roof Swiper Fadeslides Script
  var autoplay = 5000;
  var swiper = new Swiper('.fadeslides', {
    autoplayDisableOnInteraction: false,
    effect: 'fade',
    speed: 800,
    loop: true,
    paginationClickable: true,
    watchSlidesProgress: true,
    autoplay: autoplay,
    simulateTouch: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    mousewheelControl: swipermw,
    keyboardControl: swiperkb,
  });

  // Roof Estimate Calculator CheckBox
  $(".estimation-item [type=checkbox]").change(function() {
    if ($(this).is(':checked')) {
      $(this).parent('label').addClass("checkbox-icon-checked");
    } else {
      $(this).parent('label').removeClass("checkbox-icon-checked");
    }
  });

  // Roof Estimate Calculator CheckBox - Each reload selected mode
  $(".estimation-item [type=checkbox]").each(function() {
    if ($(this).is(':checked')) {
      $(this).parent('label').addClass("checkbox-icon-checked");
    } else {
      $(this).parent('label').removeClass("checkbox-icon-checked");
    }
  });

  // Check box design
  // $(".wpcf7-list-item [type=checkbox]").each(function() {
  //   $(this).wrapAll( "<div class='checkbox-icon-wrap' />");
  // });
  // $(".checkbox-icon-wrap").append( "<span class='checkbox-icon' />");

  $(window).load(function() {
    $( ".slick-dots, .slick-prev, .slick-next" ).wrapAll( "<div class='slick-dots' />");
    $( ".slick-horizontal > .slick-dots" ).insertAfter( $( ".slick-horizontal > .slick-list" ) );

    // Whole Image Clickable
    jQuery('.roof-works.full-link .roof-masonry .masonry-item').each(function () {
    var href = jQuery(this).find('.work-info .work-title a').attr('href');
    jQuery(this).find('.roof-picture').wrap('<a href="'+href+'"></a>');
    });

  });

});