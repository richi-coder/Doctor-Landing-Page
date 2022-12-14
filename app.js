$(document).ready(function() {
  $(window).on("load", function() {
    $(".layer-sobremi").fadeOut();
    $(".layer").fadeOut();
    $(".showup").fadeIn();
    
  });

  $("#img-1").on("load", function() {
    $(".portada-1").fadeOut();
  })
  $("#img-2").on("load", function() {
    $(".portada-2").fadeOut();
  })
  $("#img-3").on("load", function() {
    $(".portada-3").fadeOut();
  })
  $("#img-4").on("load", function() {
    $(".portada-4").fadeOut();
  })
  $("#img-5").on("load", function() {
    $(".portada-5").fadeOut();
  })
  $("#img-6").on("load", function() {
    $(".portada-6").fadeOut();
  })

  $(".navbar-brand").click(function() {
    location.reload();
  });

  $("#ver-mas").click(function() {
    $("#ver-mas-loader").toggleClass("mostrar");
    $(".loading-bar").fadeIn();
    $("#ver-mas").text($(this).text() == "Ver más entrevistas" ? "Ver menos entrevistas" : "Ver más entrevistas");
    setTimeout(() => {
      $("#ver-mas-loader").addClass("mostrar");
      $(".loading-bar").fadeOut();
    }, 2000);
  });

  $(".nov").on("load", function() {
    $(".jornada-img").fadeOut();
  })

document.fonts.ready.then(() => {
  if(document.getElementById("first-image").complete === true) {
    document.querySelector(".portada").classList.add("animate");
    $(document.body).removeAttr("style");
    $(".nav-link").removeClass("disabled");
    $(".loading-bar").fadeOut();
    $("#inicio").addClass("carousel");
    setTimeout(() => {
      document.getElementById("second-image").src = "https://img.freepik.com/foto-gratis/doctora-vistiendo-bata-laboratorio-estetoscopio-aislado_1303-29797.jpg?w=2000";
    }, 2000);
  }
});

  if(document.getElementById("second-image").complete === true) {
    setTimeout(() => {
      document.getElementById("third-image").src = "https://i0.wp.com/lanacionweb.com//fotoedicion/2022/09/blanco-.jpg?fit=1936%2C1288&ssl=1";
    }, 2000);
    
  }

  document.querySelector(".portada").addEventListener("animationend", (e) => {
    document.querySelector(".portada").style.display = "none";
  })

  document.querySelector(".navbar").addEventListener("animationend", () => {
    $(".loading-bar").fadeIn();
    setTimeout(() => {
      $(".loading-bar").fadeOut();
    }, 5000);
  })
  
  window.onscroll = function() {scrollBar()};

function scrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

}); 

