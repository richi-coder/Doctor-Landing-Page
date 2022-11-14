$(document).ready(function() {
  $(window).on("load", function () {
    $(".layer").fadeOut();
    $(".show").fadeIn();
  });/*
  $(".navbar-brand").click(function() {
    location.reload();
  })*/
}); 

let logo = document.querySelector(".navbar-brand");

logo.onclick = () => {
  location.reload();
}


