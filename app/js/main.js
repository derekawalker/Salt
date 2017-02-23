(function ($) {
  $(document).ready(function() {


    // Owl carousel.
    $(".owl-carousel").owlCarousel({
      center: true,
      loop: true,
      margin: 16,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ],
      responsive:{
        // breakpoint from 0 up
        0 : {
          items: 1,
          dots: false
        },
        // breakpoint from 480 up
        448 : {
          items: 2,
          dots: false
        },
        // breakpoint from 768 up
        768 : {
          items: 3,
        },
        // breakpoint from 1024 up
        1024 : {
          items: 4,
        },
        // breakpoint from 1340 up
        1340 : {
          items: 5,
        }
      }
    });

    // Main menu toggle.
    var menuToggle = function() {

      if ($(window).width() < 768) {
        var $menuToggle = $( '.main-menu-toggle' );
        var $menuContent = $( '.main-menu-content' );

        $menuToggle.on( 'click touchstart', function() {
          $( this ).toggleClass( 'expanded' );
          $menuContent.toggleClass( 'visible' );
        });
      }

    };

    // On load.
    $(window).on('load', function () {
      menuToggle();
    });

    // On resize.
    var resizeId;
    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
    });

    function doneResizing(){
      menuToggle();
      console.log('resized');
    }


  });
}(jQuery));
