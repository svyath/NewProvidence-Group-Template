const RIGHT = document.querySelector('.moveRight');
const LEFT = document.querySelector('.moveLeft');
const IMG_01 = document.querySelector('.customerImg_1');
const IMG_02 = document.querySelector('.customerImg_2');
const IMG_03 = document.querySelector('.customerImg_3');
const SLIDER_TRACK = document.querySelector('.sliderTrack');
const FEEDBACK = document.querySelector('.testimonials');

let position = 0;
let fieldWidth = FEEDBACK.clientWidth;

function setPosition() {
    SLIDER_TRACK.style.transform = `translateX(${position}px)`;
}

function changeIMG() {
    if (position === 0) {
        IMG_01.classList.add("imgActive")
        IMG_02.classList.remove("imgActive")
        IMG_03.classList.remove("imgActive")
    } else if (position === -fieldWidth) {
        IMG_02.classList.add("imgActive")
        IMG_01.classList.remove("imgActive")
        IMG_03.classList.remove("imgActive")
    } else if (position === -2 * fieldWidth) {
        IMG_03.classList.add("imgActive")
        IMG_01.classList.remove("imgActive")
        IMG_02.classList.remove("imgActive")
    }
}

changeIMG();

LEFT.addEventListener("click", () => {
    if (position === -fieldWidth || position === -2 * fieldWidth) {
        position += fieldWidth
    } else {
        position = -2 * fieldWidth
    }
    setPosition();
    changeIMG();
});

function forward() {
    if (position === 0 || position === -fieldWidth) {
        position -= fieldWidth
    } else {
        position = 0
    }
    setPosition();
    changeIMG();
}

setInterval(forward, 8000);

RIGHT.addEventListener("click", forward)

IMG_01.addEventListener("click", () => {
    position = 0;
    setPosition();
    changeIMG();
});

IMG_02.addEventListener("click", () => {
    position = -fieldWidth;
    setPosition();
    changeIMG();
});

IMG_03.addEventListener("click", () => {
    position = -2 * fieldWidth;
    setPosition();
    changeIMG();
});

window.addEventListener('resize', () => {
    fieldWidth = FEEDBACK.clientWidth;
});