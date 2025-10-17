let container = document.getElementById('container_escolhas');
let txt_container = document.getElementById('txt_escolha_perfil');

window.sr = ScrollReveal({reset: true});
sr.reveal(container, {duration: 2000});

function abrirDirect(){
  alert("Meu botão ta funcionando!");
}

function abrirPerfil(){

}

function abrirConfig(){
  
}

function proximaPagina(){

}

if (minutes >= 2) {
    container.style.display = "none";
    window.addEventListener("keydown", (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
      }, true)
    }