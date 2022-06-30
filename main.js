//@@@@@@@@@@@@Typing Effect@@@@@################
var typed = new Typed(".auto-type", {
    strings: ["DEVELOPER.", "DESIGNER."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

//@@@@@@@@@@menulist@@@@@@######
var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "350px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

//##########@@@@@@@@@@@Scroll to top@@@##
window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})


function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}


//nav scrolling

const nav = document.querySelector('nav');
const header = document.querySelector('landing-page')

const options = {

}


/*
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            nav.classList.remove('changeColor')
        } else {
            nav.classList.add('changeColor')
        }
    })
}, options)

observer.observe(landing - page)
*/

//active nav

const li = document.querySelectorAll(".link");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 100 < sec[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);