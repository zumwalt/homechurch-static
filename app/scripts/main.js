'use strict';
console.log('Welcome to Home Church!');

(function ($) {
  // --------------------------------------------------
  // Mobile nav control
  // --------------------------------------------------
    function mobileNav() {
      function toggleNav() {
        $('body').toggleClass('-mobile-nav-open');
      }
      var control = $('.mobile--nav-control');
      control.on('click tap', function(e) {
        e.preventDefault();
        toggleNav();
      });
    }

    $(document).ready(function(){
      mobileNav();
    });
})(jQuery);


