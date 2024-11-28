

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".carousel-control.prev");
    const nextBtn = document.querySelector(".carousel-control.next");

    let index = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateCarousel();
    });
});

let currentIndex = 0;

function nextItem() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % items.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function prevItem() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}


// Para automatizar o carrossel, você pode adicionar um intervalo
setInterval(nextItem, 20000); // Muda de item a cada 3 segundos

