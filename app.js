$(document).ready(
    function(){
    $(".menuitem").click(function(){
         $('.items', this).toggle();
		 $(this).siblings().children(".items").css( "display", "none" );
    });       
});