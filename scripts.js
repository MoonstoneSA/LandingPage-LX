let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
    slideIndex++;
    showSlides();
    timer = _timer; // reset timer
}

function prevSlide() {
    slideIndex--;
    showSlides();
    timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
    timer = _timer;
}

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dots");

    if (slideIndex > slides.length - 1) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    // hide all slides
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    // show one slide base on index number
    slides[slideIndex].style.display = "block";

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
    timer--;

    if (timer < 1) {
        nextSlide();
        timer = _timer; // reset timer
    }
}, 1000); // 1sec




var $body = $('body'),
    $logo = $('.logo'),
    $pContent = $('.logo__content'),
    $img = $('.logo__img-col');

function initTilt() {
    TweenMax.set([$pContent, $img], { transformStyle: "preserve-3d" });

    $body.mousemove(function(e) {
        tilt(e.pageX, e.pageY)
    });
};

function tilt(cx, cy) {
    // var sxPos = cx / $panel.width() * 100 - 100;
    // var syPos = cy / $panel.height() * 100 - 100;
    var sxPos = (cx / $body.width() * 100 - 50) * 2;
    var syPos = (cy / $body.height() * 100 - 50) * 2;
    TweenMax.to($pContent, 2, {
        rotationY: -0.03 * sxPos,
        rotationX: 0.03 * syPos,
        transformPerspective: 500,
        transformOrigin: "center center -400",
        ease: Expo.easeOut
    });
    TweenMax.to($img, 2, {
        rotationY: -0.05 * sxPos,
        rotationX: 0.05 * syPos,
        transformPerspective: 500,
        transformOrigin: "center center 0",
        ease: Expo.easeOut
    });
}

$body.mouseleave(function() {
    tilt($body.width() / 2, $body.height() / 2);
})

initTilt();

console.clear();