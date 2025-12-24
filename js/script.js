/* header shadow on scrolling */
const header = document.querySelector(".header");
document.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        header.classList.add("header-shadow")
    } else {
        header.classList.remove("header-shadow")
    }
})

/* theme switch toggle functionality */
const themePath = document.querySelector(".theme-path");
const btnCircle = document.querySelector('.btn-circle');
themePath.addEventListener("click", () => {
    btnCircle.classList.toggle("btn-circle-right")
    document.body.classList.toggle("dark-theme")
})

/* navigation menu toggle */
const toggle = document.querySelector(".toggle");
const navigations = document.querySelector(".navigations");
toggle.addEventListener("click", () => {
    toggle.querySelector("i").classList.toggle("ri-close-line")
    navigations.classList.toggle("show_navigations")
})

/* /* remove toggle functionality on scrolling page */
document.addEventListener("scroll", () => {
    toggle.querySelector("i").classList.remove("ri-close-line")
    navigations.classList.remove("show_navigations")
})

/* remove toggle functionality on scrolling page*/
const links = document.querySelectorAll(".navigations ul li a");
links.forEach((link, index) => {
    link.addEventListener("click", () => {
        toggle.querySelector("i").classList.remove("ri-close-line")
        navigations.classList.remove("show_navigations")
    })
})

const priceCards = document.querySelectorAll(".price .card");
priceCards.forEach((card) => {
    card.addEventListener("click", () => {
        priceCards.forEach((c) => {
            c.classList.remove("highlight");
        })
        card.classList.add("highlight")
    })
})

/* faq */
$(document).ready(function () {
    $(".accordion-content").not(".active").hide();
    $(".accordion-header").click(function () {
        $(".accordion-content").slideUp();
        $(".accordion-header").removeClass("active");

        if (!$(this).next().is(":visible")) {
            $(this).addClass("active");
            $(this).next().slideDown();
        }
    })
})

/* slider */
$('.testminial-slider').owlCarousel({
    loop: true,
    margin: 30,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    smartSpeed: 800,
    responsive: {
        0: { items: 1 },
        700: { items: 2 },
        1000: { items: 3 }
    }
});
