const NomeDuvida = document.getElementById('name')
const Duvida = document.getElementById('duvidaText')

function PegarResposta(elemento) {
    var proximoRespostaContainer = elemento.querySelector('.resposta-container');

    if (proximoRespostaContainer) {
        proximoRespostaContainer.classList.toggle("aberto");
        var flecha = elemento.querySelector('.arrow-img');
        if(flecha){
            flecha.classList.toggle('aberto')
        }
    } else {
        console.error("O próximo elemento .resposta-container não foi encontrado.");
    }

}

function EnviarDuvida(){
    window.open(`https://api.whatsapp.com/send/?phone=554533777654&text=Ol%C3%A1%2C+meu+nome+e+${NomeDuvida.value}+tenho+a+seguinte+duvida+:+${Duvida.value}&type=phone_number&app_absent=0`,'_blank').focus();
}

