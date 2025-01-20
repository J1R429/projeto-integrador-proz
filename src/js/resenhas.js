
let currentIndex = 0;

function nextItem() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function prevItem() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth; // Largura do item
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Movimenta o carrossel para o item atual
}

