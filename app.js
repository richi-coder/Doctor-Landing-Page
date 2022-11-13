$(document).ready(function() {
    $( "#test" ).load( "http://www.tachira.gob.ve/wp-content/uploads/2014/09/Dra.-Raquel-Ariza.jpg", function() {
        $(".placeholder").fadeOut();
        
      });
})

/*
let test = document.getElementById("test");
let array = Array.from(document.getElementsByClassName("placeholder"));

if (test.complete) {
    setTimeout(() => {
        array.forEach(x => {
            x.remove();
        });
    }, 2000);

}*/