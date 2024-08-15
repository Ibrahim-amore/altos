const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slidePosition = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const slideWidth = carousel.clientWidth / slidesToShow;
const slideTimer = 5000;

slides.forEach((slide, index) => {
  slide.style.left = index * slideWidth + 'px';
});

prevBtn.addEventListener('click', () => {
  slidePosition += slidesToScroll;
  if (slidePosition > 0) {
    slidePosition = -(slides.length - slidesToShow) * slideWidth;
  }
  moveSlides();
});

nextBtn.addEventListener('click', () => {
  slidePosition -= slidesToScroll;
  if (slidePosition < -(slides.length - slidesToShow) * slideWidth) {
    slidePosition = 0;
  }
  moveSlides();
});

setInterval(() => {
  slidePosition -= slidesToScroll;
  if (slidePosition < -(slides.length - slidesToShow) * slideWidth) {
    slidePosition = 0;
  }
  moveSlides();
}, slideTimer);

function moveSlides() {
  carousel.style.transform = `translateX(${slidePosition}px)`;
}
