
let currentIndex = 1; 

function showSlide(index) {
    const items = document.querySelector('.carousel-items');
    const cards = document.querySelectorAll('.carouselCard');
    const totalItems = cards.length;

    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * (100/totalItems);
    items.style.transform = `translateX(${offset}%)`;

    cards.forEach((card, idx) => {
        card.classList.remove('center');
        if (idx === currentIndex) {
            card.classList.add('center');
        }
    });
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}
showSlide(currentIndex);