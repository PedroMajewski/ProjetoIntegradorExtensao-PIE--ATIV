const centro = document.getElementById("caroselCard2");
const esquerda = document.getElementById("caroselCard1");
const direita = document.getElementById("caroselCard3");
const elementos = document.querySelectorAll(".caroselCard");
const container = document.getElementById("carosel-container");

function prevSlide(){
    
    // Centro
    if(centro.classList.contains("caroselCard-2")){
        centro.className = "caroselCard-1"
    }else if(centro.classList.contains("caroselCard-1")){
        centro.className = "caroselCard-3"
    }else if(centro.classList.contains("caroselCard-3")){
        centro.className = "caroselCard-2"
    }

    // Esquerda
    if(esquerda.classList.contains("caroselCard-2")){
        esquerda.className = "caroselCard-1"
    }else if(esquerda.classList.contains("caroselCard-1")){
        esquerda.className = "caroselCard-3"
    }else if(esquerda.classList.contains("caroselCard-3")){
        esquerda.className = "caroselCard-2"
    }

    // Direita
    if(direita.classList.contains("caroselCard-2")){
        direita.className = "caroselCard-1"
    }else if(direita.classList.contains("caroselCard-1")){
        direita.className = "caroselCard-3"
    }else if(direita.classList.contains("caroselCard-3")){
        direita.className = "caroselCard-2"
    }

}

function nextSlide(){
    // Centro
    if(centro.classList.contains("caroselCard-2")){
        centro.className = "caroselCard-3"
    }else if(centro.classList.contains("caroselCard-3")){
        centro.className = "caroselCard-1"
    }else if(centro.classList.contains("caroselCard-1")){
        centro.className = "caroselCard-2"
    }

    // Esquerda
    if(esquerda.classList.contains("caroselCard-2")){
        esquerda.className = "caroselCard-3"
    }else if(esquerda.classList.contains("caroselCard-3")){
        esquerda.className = "caroselCard-1"
    }else if(esquerda.classList.contains("caroselCard-1")){
        esquerda.className = "caroselCard-2"
    }

    // Direita
    if(direita.classList.contains("caroselCard-2")){
        direita.className = "caroselCard-3"
    }else if(direita.classList.contains("caroselCard-3")){
        direita.className = "caroselCard-1"
    }else if(direita.classList.contains("caroselCard-1")){
        direita.className = "caroselCard-2"
    }
}
