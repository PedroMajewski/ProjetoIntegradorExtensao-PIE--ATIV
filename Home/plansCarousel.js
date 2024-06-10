const centro = document.getElementById("plano-2");
const esquerda = document.getElementById("plano-1");
const direita = document.getElementById("plano-3");
const elementos = document.querySelectorAll("[class^='plano-']");
const container = document.getElementById("div-planosID");

let startX;

container.addEventListener('touchstart', handleTouchStart, false);
container.addEventListener('touchmove', handleTouchMove, false);
container.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
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
    }
}

function prevSlide() {
    // Centro
    if (centro.classList.contains("plano-2")) {
        centro.className = "plano-1";
    } else if (centro.classList.contains("plano-1")) {
        centro.className = "plano-3";
    } else if (centro.classList.contains("plano-3")) {
        centro.className = "plano-2";
    }

    // Esquerda
    if (esquerda.classList.contains("plano-2")) {
        esquerda.className = "plano-1";
    } else if (esquerda.classList.contains("plano-1")) {
        esquerda.className = "plano-3";
    } else if (esquerda.classList.contains("plano-3")) {
        esquerda.className = "plano-2";
    }

    // Direita
    if (direita.classList.contains("plano-2")) {
        direita.className = "plano-1";
    } else if (direita.classList.contains("plano-1")) {
        direita.className = "plano-3";
    } else if (direita.classList.contains("plano-3")) {
        direita.className = "plano-2";
    }
}

function nextSlide() {
    // Centro
    if (centro.classList.contains("plano-2")) {
        centro.className = "plano-3";
    } else if (centro.classList.contains("plano-3")) {
        centro.className = "plano-1";
    } else if (centro.classList.contains("plano-1")) {
        centro.className = "plano-2";
    }

    // Esquerda
    if (esquerda.classList.contains("plano-2")) {
        esquerda.className = "plano-3";
    } else if (esquerda.classList.contains("plano-3")) {
        esquerda.className = "plano-1";
    } else if (esquerda.classList.contains("plano-1")) {
        esquerda.className = "plano-2";
    }

    // Direita
    if (direita.classList.contains("plano-2")) {
        direita.className = "plano-3";
    } else if (direita.classList.contains("plano-3")) {
        direita.className = "plano-1";
    } else if (direita.classList.contains("plano-1")) {
        direita.className = "plano-2";
    }
}
