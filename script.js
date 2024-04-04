const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function section4Animation() {
    var elemContainer = document.querySelector("#element-container")
    var video = document.querySelector("#fixed-video")
    elemContainer.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemContainer.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".element")
    elems.forEach(function (e) {
        console.log('elems')
        e.addEventListener("mouseenter", function () {
            console.log('mouseenter')

            var src = e.getAttribute("data-video")
            console.log(src , "src")
            console.log("video" , video)
            
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