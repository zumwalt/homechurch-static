'use strict';
console.log('Welcome to Home Church!');

(function ($) {
  // --------------------------------------------------
  // Mobile nav control
  // --------------------------------------------------
    function mobileNav() {
      var control = $('.mobile--nav-control');
      control.on('click', function(e) {
        e.preventDefault();
        console.log('mobile-nav toggle');
        $('body').toggleClass('--mobile-nav-open');
      });
    }

    $(document).ready(function(){
      mobileNav();
    });
})(jQuery);


