/*-----------------------Enlarging logo-----------------------*/
function enlarged(ele) {
    ele.mouseover(function() { ele.animate({ fontSize: "40px" }) });
    ele.mouseleave(function() { ele.animate({ fontSize: "2rem" }) });
}
let nb = $(".navbar-brand");
enlarged(nb);
let flogo = $(".footer-logo")
enlarged(flogo);
/*------------------------------opacity--------------------------*/

function opacity(ele) {
    ele.mouseover(function() { ele.animate({ opacity: "1" }) });
    ele.mouseleave(function() { ele.animate({ opacity: "0.4" }) });
}
let about = $(".about");
about.animate({ opacity: "0.4" });
opacity(about);

/*-----------------------------letterSpace----------------------------*/
function letterSpace(ele) {
    ele.mouseover(function() { ele.animate({ letterSpacing: "5px" }) });
    ele.mouseleave(function() { ele.animate({ letterSpacing: "1px" }) });
}

let abme = $(".owner h1");
letterSpace(abme);
/*-------------------------------blur-------------------------------*/