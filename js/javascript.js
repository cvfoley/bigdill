let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
    console.log("Clicking hamburger");
    mainNav.classList.toggle("burger");
})


