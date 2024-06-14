function carouselMobile() {
    if (window.innerWidth <= 700) {
        const centro = document.getElementById("plano-2");
        const esquerda = document.getElementById("plano-1");
        const direita = document.getElementById("plano-3");
        const elementos = Array.from(document.querySelectorAll(".div-planos > div"));
        const container = document.getElementById("div-planosID");
        const dots = document.querySelectorAll(".dot");

        let startX;
        let index = 1; // Índice do card central
        let isMobile = false;

        container.addEventListener('touchstart', handleTouchStart, false);
        container.addEventListener('touchmove', handleTouchMove, false);
        container.addEventListener('touchend', handleTouchEnd, false);

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                goToSlide(i); 
            });//Evento de clique em cada DOT :)
        });

        container.addEventListener('touchstart', function(event) {
            event.stopPropagation();
        });

        function handleTouchStart(event) {
            startX = event.touches[0].clientX;
            container.style.transition = 'none';
            
        }

        function handleTouchMove(event) {
            
        }

        function handleTouchEnd(event) {
            const endX = event.changedTouches[0].clientX;
            const diffX = endX - startX;

            if (diffX > 50) {
                prevSlide();
            } else if (diffX < -50) {
                nextSlide();
            } else {
                container.style.transition = 'transform 0.5s ease-in-out';
                container.style.transform = `translateX(${startOffset}px)`;
            }
            container.style.transition = 'transform 0.5s ease-in-out';
            event.preventDefault();
        }

        function prevSlide() {
            container.insertBefore(elementos[elementos.length - 1], elementos[0]);
            elementos.unshift(elementos.pop());
            updateSlides();
            updateDotHighlight();
        }

        function nextSlide() {
            container.appendChild(elementos[0]);
            elementos.push(elementos.shift());
            updateSlides();
            updateDotHighlight();
        }

        function goToSlide(index) {
            const currentIndex = 1;
            const diff = index - currentIndex;

            if (diff > 0) {
                for (let i = 0; i < diff; i++) {
                    nextSlide();
                }
            } else {
                for (let i = 0; i > diff; i--) {
                    prevSlide();
                }
            }
        }

        function updateSlides() {
            elementos.forEach((el, index) => {
                const distanceFromCenter = index - 1; 
                const scaleFactor = Math.pow(0.8, Math.abs(distanceFromCenter)); 
                const opacityFactor = Math.pow(0.7, Math.abs(distanceFromCenter));

                el.style.transform = `translateX(${distanceFromCenter * 100}%) scale(${scaleFactor})`;
                el.style.opacity = opacityFactor;
            });
        }

        function updateDotHighlight() {
            
            dots.forEach(dot => {
                dot.classList.remove('highlight');
            });

            //Faz com que o DOT respectivo esteja com a classe "highlight"
            if (elementos[1] === centro) {
                dots[1].classList.add('highlight');
            } else if (elementos[1] === esquerda) {
                dots[0].classList.add('highlight');
            } else if (elementos[1] === direita) {
                dots[2].classList.add('highlight');
            }
        }
        function desativCarousel() {
            container.removeEventListener('touchstart', handleTouchStart, false);
            container.removeEventListener('touchmove', handleTouchMove, false);
            container.removeEventListener('touchend', handleTouchEnd, false);
    
            dots.forEach((dot, i) => {
                dot.removeEventListener('click', () => {
                    goToSlide(i); 
                });
            });
    
            elementos.forEach((el) => {
                el.style.transform = '';
                el.style.opacity = '';
            });
    
            container.innerHTML = '';
            elementos.forEach(el => container.appendChild(el));
        }

        goToSlide();
        updateSlides();
        updateDotHighlight();
    } else { 
        if (isMobile){
            desativCarousel();
            isMobile = true;
        }
    }
}

window.addEventListener('load', carouselMobile);
window.addEventListener('resize', carouselMobile);
