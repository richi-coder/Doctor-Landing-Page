$(document).ready(function() {
  $(window).on("load", function () {
    $(".layer").fadeOut();
    $(".showup").fadeIn();
  });
  $(".navbar-brand").click(function() {
    location.reload();
  });
  $("#ver-mas").click(function() {
    $("#ver-mas-loader").toggleClass("mostrar");
  })
}); 
/*
let logo = document.querySelector(".navbar-brand");

logo.onclick = () => {
  location.reload();
}

*/
