const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselSlide = document.querySelector('.carousel-container');

let counter = 0;

function updateCarousel() {
  const slideWidth = document.querySelector('.carousel').offsetWidth;
  carouselSlide.style.transform = `translateX(${-counter * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  const slides = carouselSlide.children.length;
  counter = (counter + 1) % slides;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  const slides = carouselSlide.children.length;
  counter = (counter - 1 + slides) % slides;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
