var $splashSection = $('#splash-container');
var $indexSection =$('#index-container')



$(document).ready(function(e){
  //Nav, Modals and Select//
  $(".button-collapse").sideNav();
  $('.modal').modal();
  //Nav, Modals and Select End//
  //Splash Page//

  $splashSection.fadeOut(5500)
  $indexSection.fadeIn(1000)
});
