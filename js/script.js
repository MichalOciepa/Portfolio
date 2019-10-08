//Menu slider
const burger = document.querySelector(".fa-bars");
const slideMenu = document.querySelector(".mobile");

burger.addEventListener("click", function () {
    slideMenu.classList.toggle("show");
})
//Media scroll
const aside = document.querySelector("aside");

window.addEventListener("scroll", function () {
    aside.classList.add("show1");
})
//Ambulance stop

const ambulance = document.querySelector(".move");
ambulance.addEventListener("click", function () {
    ambulance.classList.toggle("stop");

})

//Hobby details
// const paramedic = document.querySelector(".hbb1");
// const coding = document.querySelector(".hbb2");
// const arduino = document.querySelector(".hbb3");
// const triathlon = document.querySelector(".hbb4");


// paramedic.addEventListener("click", function () {
//     paramedic.classList.toggle("opacity");
// })
// coding.addEventListener("click", function () {
//     coding.classList.toggle("opacity");
// })
// arduino.addEventListener("click", function () {
//     arduino.classList.toggle("opacity");
// })
// triathlon.addEventListener("click", function () {
//     triathlon.classList.toggle("opacity");
// })

//Scroll into html
function scroll(e) {

    var href = $(this).attr('href');

    e.preventDefault();

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);

    location.hash = href;

};
$('a[href^="#"]').click(scroll);