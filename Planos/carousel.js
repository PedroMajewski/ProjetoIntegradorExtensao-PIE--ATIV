const container = document.querySelector('.carousel-container');

container.addEventListener('scroll', () => {
    const containerWidth = container.offsetWidth;
    const items = document.querySelectorAll('.carouselCard');

    items.forEach(item => {
        const distanceToCenter = Math.abs(item.offsetLeft + item.offsetWidth / 2 - containerWidth / 2);
        const offset = container.scrollLeft + distanceToCenter - containerWidth / 2;
        item.style.transform = `translateX(${offset}px)`;
    });
});
