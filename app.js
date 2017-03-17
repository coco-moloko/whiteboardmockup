jQuery(function ($) {
    ('.colourDropdown').hover(
      function () {
        $(this).show();
      }, 
      function () {
        $(this).hide();
      }
    );
});