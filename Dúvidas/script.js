function PegarResposta(elemento) {
    var proximoRespostaContainer = elemento.querySelector('.resposta-container');

    if (proximoRespostaContainer) {
        proximoRespostaContainer.classList.toggle("aberto");
    } else {l
        console.error("O próximo elemento .resposta-container não foi encontrado.");
    }
}
