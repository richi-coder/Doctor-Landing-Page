$(document).ready(function() {
  $("#portada").on("load", function() {
    $(this).removeClass("portada");
  });

  $("#about-me").on("load", function() {
    $(".layer-sobremi").fadeOut();
  });

  $(window).on("load", function() {
    $(".layer").fadeOut();
    $(".showup").fadeIn();
  });

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
}); 