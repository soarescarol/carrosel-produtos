const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const itemsPerView = 3;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + itemsPerView) % totalItems;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - itemsPerView + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${index * (100 / itemsPerView)}%)`;
}
let slideIndex = 0;

function moveSlide(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = totalItems - 1;
    }
    if (slideIndex >= totalItems) {
        slideIndex = 0;
    }

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${slideIndex * 33.33}%)`;
}

