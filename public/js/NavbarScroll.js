var navbar = document.getElementById('nav');
var sticky = navbar.offsetTop;

var myfunction = function() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}

window.onscroll = function() {
    myfunction()
}