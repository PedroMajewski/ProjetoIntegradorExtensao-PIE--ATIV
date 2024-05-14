function PegarResposta(elemento) {
    var proximoRespostaContainer = elemento.querySelector('.resposta-container');

    if (proximoRespostaContainer) {
        proximoRespostaContainer.classList.toggle("aberto");
    } else {
        console.error("O próximo elemento .resposta-container não foi encontrado.");
    }
}
