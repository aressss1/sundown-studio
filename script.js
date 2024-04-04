
// locomotive initialization

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Setting z-index for scrolbar (locomotive hack)

document.querySelector(".c-scrollbar").style.zIndex = 99



function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

function section4Animation() {
    var elemContainer = document.querySelector("#element-container")
    var fixedContainer = document.querySelector("#fixed-container")
    var video = document.querySelector("#fixed-container-video")

    elemContainer.addEventListener("mouseenter", function () {
        fixedContainer.style.display = "block"
    })
    elemContainer.addEventListener("mouseleave", function () {
        fixedContainer.style.display = "none"
    })

    var elements = document.querySelectorAll(".element")
    elements.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var videoSrc = e.getAttribute("data-video")
            console.log(videoSrc , 'videoSrc')
            console.log(video , "videoElement")
            
            video.src = videoSrc
            console.log(video , "video")
        })
    })
}

function swiperJsInitialization() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        // centeredSlides: true,
        spaceBetween: 80,
    });
}


loaderAnimation()

section4Animation()

swiperJsInitialization()
