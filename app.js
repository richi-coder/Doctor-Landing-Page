$(document).ready(function() {
    $("#test").load(function() {
        alert("jQuery");
        $(".placeholder").hide();
    })
})


let test = document.getElementById("test");
let array = Array.from(document.getElementsByClassName("placeholder"));

if (test.complete) {
    setTimeout(() => {
        array.forEach(x => {
            x.remove();
        });
        alert("javascript")
    }, 15000);

}
//if (test.complete === true) alert("Algo")