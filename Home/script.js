let btn_icone = document.getElementById("btn-icone")
let menu_lateral = document.querySelector(".menu-mobile")

btn_icone.addEventListener("click",function abrir(){
    menu_lateral.classList.toggle("aberto");
});
