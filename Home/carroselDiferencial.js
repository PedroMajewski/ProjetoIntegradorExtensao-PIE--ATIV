const centro = document.getElementById("carouselCard2");
const esquerda = document.getElementById("carouselCard1");
const direita = document.getElementById("carouselCard3");
const elementos = document.querySelectorAll(".carouselCard");
const container = document.getElementById("carousel-container");

function prevSlide(){
    
    // Centro
    if(centro.classList.contains("carouselCard-2")){
        centro.className = "carouselCard-1"
    }else if(centro.classList.contains("carouselCard-1")){
        centro.className = "carouselCard-3"
    }else if(centro.classList.contains("carouselCard-3")){
        centro.className = "carouselCard-2"
    }

    // Esquerda
    if(esquerda.classList.contains("carouselCard-2")){
        esquerda.className = "carouselCard-1"
    }else if(esquerda.classList.contains("carouselCard-1")){
        esquerda.className = "carouselCard-3"
    }else if(esquerda.classList.contains("carouselCard-3")){
        esquerda.className = "carouselCard-2"
    }

    // Direita
    if(direita.classList.contains("carouselCard-2")){
        direita.className = "carouselCard-1"
    }else if(direita.classList.contains("carouselCard-1")){
        direita.className = "carouselCard-3"
    }else if(direita.classList.contains("carouselCard-3")){
        direita.className = "carouselCard-2"
    }

}

function nextSlide(){
    // Centro
    if(centro.classList.contains("carouselCard-2")){
        centro.className = "carouselCard-3"
    }else if(centro.classList.contains("carouselCard-3")){
        centro.className = "carouselCard-1"
    }else if(centro.classList.contains("carouselCard-1")){
        centro.className = "carouselCard-2"
    }

    // Esquerda
    if(esquerda.classList.contains("carouselCard-2")){
        esquerda.className = "carouselCard-3"
    }else if(esquerda.classList.contains("carouselCard-3")){
        esquerda.className = "carouselCard-1"
    }else if(esquerda.classList.contains("carouselCard-1")){
        esquerda.className = "carouselCard-2"
    }

    // Direita
    if(direita.classList.contains("carouselCard-2")){
        direita.className = "carouselCard-3"
    }else if(direita.classList.contains("carouselCard-3")){
        direita.className = "carouselCard-1"
    }else if(direita.classList.contains("carouselCard-1")){
        direita.className = "carouselCard-2"
    }
}

