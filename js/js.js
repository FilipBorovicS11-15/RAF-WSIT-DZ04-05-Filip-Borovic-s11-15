//HAMBURGER MENI
 
$(document).ready(function(){

  $(".header-right > a").click(function() {
    $(".hamburger-menu").addClass("active");
  });

  $(".close").click(function() {
    $(".hamburger-menu").removeClass("active");
  });

});

//GALERIJA

window.addEventListener('load', function() {
  baguetteBox.run('.tz-gallery');
});
