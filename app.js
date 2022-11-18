$(document).ready(function() {
  $("#about-me").on("load", function() {
    $(".layer-sobremi").fadeOut();
    console.log("sobre mi OK")
  })
  $(".picture1").on("load", function() {
    $(".layer").fadeOut();
    $(".showup").fadeIn();
    console.log("loaded")
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
  })
}); 

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP candidate:', entry.startTime, entry);
  }
}).observe({type: 'largest-contentful-paint', buffered: true});

