const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function section4Animation() {
    var elemContainer = document.querySelector("#element-container")
    var video = document.querySelector("#fixed-container-video")
    elemContainer.addEventListener("mouseenter", function () {
        elemContainer.style.display = "block"
    })
    elemContainer.addEventListener("mouseleave", function () {
        elemContainer.style.display = "none"
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