const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function section4Animation() {
    var elemC = document.querySelector("#element-container")
    var video = document.querySelector("#fixed-video")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".element")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-video")
            video.src = image
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        // centeredSlides: true,
        spaceBetween: 80,
    });
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
section4Animation()
loaderAnimation()