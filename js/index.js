//portfolio images collapse

$('#all-btn').attr('data-target', '');

$('#all').on('show.bs.collapse', function() {
    $('#all-btn').attr('data-target', '');
    $('#all-btn').addClass('active2');

    $('#app').collapse('hide');
    $('#app-btn').attr('data-target', '#app');
    $('#app-btn').removeClass('active2');

    $('#the-card').collapse('hide');
    $('#the-card-btn').attr('data-target', '#the-card');
    $('#the-card-btn').removeClass('active2');

    $('#web').collapse('hide');
    $('#web-btn').attr('data-target', '#web');
    $('#web-btn').removeClass('active2');
})

$('#app').on('show.bs.collapse', function() {
    $('#app-btn').attr('data-target', '');

    $('#all').collapse('hide');
    $('#all-btn').attr('data-target', '#all');
    $('#all-btn').removeClass('active2');

    $('#the-card').collapse('hide');
    $('#the-card-btn').attr('data-target', '#the-card');
    $('#the-card-btn').removeClass('active2');

    $('#web').collapse('hide');
    $('#web-btn').attr('data-target', '#web');
    $('#web-btn').removeClass('active2');
})

$('#the-card').on('show.bs.collapse', function() {
    $('#the-card-btn').attr('data-target', '');

    $('#all').collapse('hide');
    $('#all-btn').attr('data-target', '#all');
    $('#all-btn').removeClass('active2');

    $('#app').collapse('hide');
    $('#app-btn').attr('data-target', '#app');
    $('#app-btn').removeClass("active2");

    $('#web').collapse('hide');
    $('#web-btn').attr('data-target', '#web');
    $('#web-btn').removeClass('active2');
})

$('#web').on('show.bs.collapse', function() {
    $('#web-btn').attr('data-target', '');


    $('#all').collapse('hide');
    $('#all-btn').attr('data-target', '#all');
    $('#all-btn').removeClass('active2');

    $('#app').collapse('hide');
    $('#app-btn').attr('data-target', '#app');
    $('#app-btn').removeClass('active2');

    $('#the-card').collapse('hide');
    $('#the-card-btn').attr('data-target', '#the-card');
    $('#the-card-btn').removeClass('active2');
})

let photos = document.querySelectorAll('.image-box');
photos.forEach(photo => {
    photo.addEventListener('mouseover', () => {
        photo.firstElementChild.firstElementChild.firstElementChild.style.display = 'block';
        photo.firstElementChild.firstElementChild.lastElementChild.style.transform = 'scale(1.2)';
    })
    photo.addEventListener('mouseout', () => {
        photo.firstElementChild.firstElementChild.firstElementChild.style.display = 'none';
        photo.firstElementChild.firstElementChild.lastElementChild.style.transform = 'scale(1)';

    })
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const aList = document.querySelectorAll('.nav-item');
//function to prevent default and use scrollIntoView

const scrollToSection = function(event) {

    event.preventDefault();

    const selectedSection = document.getElementById(event.target.getAttribute('data-link'));

    selectedSection.scrollIntoView({ block: 'start', behavior: 'smooth' });
    setTimeout(() => {
        let scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
        window.scrollTo(0, scrollTop - 100)
    }, 1000)
};

//addEventListener  for each <a>

for (let a of aList) {

    a.addEventListener('click', scrollToSection);

};
//function to check if a sectin x is the viewport_____________________________________________
const isInViewport = function(x) {
    const bounding = x.getBoundingClientRect();
    return (
        bounding.top >= -300 &&
        bounding.bottom <= (window.innerHeight + 400 || document.documentElement.clientHeight + 400)
    );
};

let sections = document.querySelectorAll('section');
//call the previous check for each section

const toggleActiveState = function() {
    for (let section of sections) {
        if (isInViewport(section)) {
            let sec = section.id;
            if (sec != "") {
                let a = document.querySelector('.' + sec)
                a.classList.add('active1');
            }
        } else {
            let sec = section.id;
            if (sec != "") {
                let a = document.querySelector('.' + sec)
                a.classList.remove('active1');
            }
        }
    }
};

//call toggleActiveState everytime you scroll

window.addEventListener('scroll', toggleActiveState);


$(window).scroll(function() {
    let scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
    if (scrollTop < 400) {
        document.querySelector(".fixed-top").style.paddingTop = "15px"
        document.querySelector(".fixed-top").style.boxShadow = "none"
    } else {
        document.querySelector(".fixed-top").style.paddingTop = "5px"
        document.querySelector(".fixed-top").style.boxShadow = "0 0 8px rgba(0, 0, 0, .6)"
    }
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
 * Testimonials slider
 */
new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});
