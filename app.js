$(document).ready(function() {
  $(".portada").fadeOut();

  $(window).on("load", function() {
    $(".layer-sobremi").fadeOut();
    $(".layer").fadeOut();
    $(".showup").fadeIn();
  });

  $("#last-img").on("load", function() {
    $(".portada-img").fadeOut();
  })

  $(".navbar-brand").click(function() {
    location.reload();
  });

  $("#ver-mas").click(function() {
    $("#ver-mas-loader").toggleClass("mostrar");
    $("#ver-mas").text($(this).text() == "Ver más entrevistas" ? "Ver menos entrevistas" : "Ver más entrevistas");
    setTimeout(() => {
      $("#ver-mas-loader").addClass("mostrar");
    }, 500);
  });

  $(".nov").on("load", function() {
    $(".jornada-img").fadeOut();
  })

  $("#first-image").on("load", function() {
    $(".portada").fadeOut();
  })

}); 