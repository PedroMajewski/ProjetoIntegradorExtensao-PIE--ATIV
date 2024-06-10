let btn_icone = document.getElementById("btn-icone")
let menu_lateral = document.querySelector(".menu-mobile")

btn_icone.addEventListener("click",function abrir(){
    menu_lateral.classList.toggle("aberto");
    if (btn_icone.src.includes("menu-mobile.svg")) {
        btn_icone.src = "../Home/Assets/Header/cross.svg";
    } else {
        btn_icone.src = "../Home/Assets/Header/menu-mobile.svg";
    }
});

document.addEventListener("click", fecharMenu);

function fecharMenu(event) {
    if (!menu_lateral.contains(event.target) && !btn_icone.contains(event.target)) {
        menu_lateral.classList.remove("aberto");
        btn_icone.src = "../Home/Assets/Header/menu-mobile.svg";
    }
}


