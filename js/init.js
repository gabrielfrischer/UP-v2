(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
       

 $(document).ready(
    function() {
        $("#hideandshow").click(function() {
            $(".satelliteBox").fadeToggle();
        });
    });

   $(document).ready(function(){
    $('ul.tabs').tabs();
  });

   // Start of popout function
$(".popout1 .btn1").click(function() {
  $(this).toggleClass("active");
  $(this).closest(".popout1").find(".panel1").toggleClass("active");
});
$(document).click(function() {
  $(".popout1 .panel1").removeClass("active");
  $(".popout1 .btn1").removeClass("active");
});
$(".popout1 .panel1").click(function(event) {
  event.stopPropagation();
});
$(".popout1 .btn1").click(function(event) {
  event.stopPropagation();
});

// end of popout function

   // Start of popout function
$(".popout2 .btn2").click(function() {
  $(this).toggleClass("active");
  $(this).closest(".popout2").find(".panel2").toggleClass("active");
});
$(document).click(function() {
  $(".popout2 .panel2").removeClass("active");
  $(".popout2 .btn2").removeClass("active");
});
$(".popout2 .panel2").click(function(event) {
  event.stopPropagation();
});
$(".popout2 .btn2").click(function(event) {
  event.stopPropagation();
});

// end of popout function

   // Start of popout function
$(".popout3 .btn3").click(function() {
  $(this).toggleClass("active");
  $(this).closest(".popout3").find(".panel3").toggleClass("active");
});
$(document).click(function() {
  $(".popout3 .panel3").removeClass("active");
  $(".popout3 .btn3").removeClass("active");
});
$(".popout3 .panel3").click(function(event) {
  event.stopPropagation();
});
$(".popout3 .btn3").click(function(event) {
  event.stopPropagation();
});

// end of popout function

   // Start of popout function
$(".popout4 .btn4").click(function() {
  $(this).toggleClass("active");
  $(this).closest(".popout4").find(".panel4").toggleClass("active");
});
$(document).click(function() {
  $(".popout4 .panel4").removeClass("active");
  $(".popout4 .btn4").removeClass("active");
});
$(".popout4 .panel4").click(function(event) {
  event.stopPropagation();
});
$(".popout4 .btn4").click(function(event) {
  event.stopPropagation();
});

// end of popout function




