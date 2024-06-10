const centro = document.getElementById("plano-2");
const esquerda = document.getElementById("plano-1");
const direita = document.getElementById("plano-3");
const elementos = document.querySelectorAll(".plano");
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
    if (centro.classList.contains("plano2")) {
        centro.className = "plano1";
    } else if (centro.classList.contains("plano1")) {
        centro.className = "plano3";
    } else if (centro.classList.contains("plano3")) {
        centro.className = "plano2";
    }

    // Esquerda
    if (esquerda.classList.contains("plano2")) {
        esquerda.className = "plano1";
    } else if (esquerda.classList.contains("plano1")) {
        esquerda.className = "plano3";
    } else if (esquerda.classList.contains("plano3")) {
        esquerda.className = "plano2";
    }

    // Direita
    if (direita.classList.contains("plano2")) {
        direita.className = "plano1";
    } else if (direita.classList.contains("plano1")) {
        direita.className = "plano3";
    } else if (direita.classList.contains("plano3")) {
        direita.className = "plano2";
    }
}

function nextSlide() {
    // Centro
    if (centro.classList.contains("plano2")) {
        centro.className = "plano3";
    } else if (centro.classList.contains("plano3")) {
        centro.className = "plano1";
    } else if (centro.classList.contains("plano1")) {
        centro.className = "plano2";
    }

    // Esquerda
    if (esquerda.classList.contains("plano2")) {
        esquerda.className = "plano3";
    } else if (esquerda.classList.contains("plano3")) {
        esquerda.className = "plano1";
    } else if (esquerda.classList.contains("plano1")) {
        esquerda.className = "plano2";
    }

    // Direita
    if (direita.classList.contains("plano2")) {
        direita.className = "plano3";
    } else if (direita.classList.contains("plano3")) {
        direita.className = "plano1";
    } else if (direita.classList.contains("plano1")) {
        direita.className = "plano2";
    }
}
