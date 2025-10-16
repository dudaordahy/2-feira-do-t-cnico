function AbrirDirect(){
    alert("Meu botão ta funcionando!");
}

function AbrirPerfil(){

}

function AbrirConfig(){
    
}


if(minutes >= 2) {
    finalizacao.style.display = "block";
    formattedTime = "00:00:00"
    clearTimeout();
    window.addEventListener("keydown", (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
      }, true)
    }