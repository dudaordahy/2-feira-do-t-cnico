
// colecao de preferencias do usuario
const colecaoPreferencias =[{
  nome: "Gastro",
  imagem: "prefGastronomia.jpg"
},{
  nome: "Volei",
  imagem: "prefVolei.jpg"
}];

//
Object.values(colecaoPreferencias).forEach(value => {

  const imagem = document.createElement("img");
  imagem.src = "../imagens/"+value.imagem;
  console.log(imagem);
});

console.log(colecaoPreferencias);


let container = document.getElementById('container_escolhas');
let txt_container = document.getElementById('txt_escolha_perfil');
let btn_foto = document.getElementById('btn_foto');

window.sr = ScrollReveal({reset: true});
sr.reveal(container, {duration: 2500});

function abrirDirect(){
  alert("Meu botão ta funcionando!");
}

function abrirPerfil(){

}

function abrirConfig(){
  
}

function proximaPagina(){
  txt_container.remove();
  btn_foto.remove();

  const texto = document.createElement("h1");
  texto.innerHTML = "Escolha suas preferencias";
  texto.id = "txt_escolha_preferencias";
  document.getElementById("container_escolhas").appendChild(texto);

  const div_botoes = document.createElement("div")
  div_botoes.id = "container_botoes";
  document.getElementById("container_escolhas").appendChild(div_botoes);

  const botao = document.createElement("button");
  botao.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao);

  const botao1 = document.createElement("button");
  botao1.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao1);

  const botao2 = document.createElement("button");
  botao2.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao2);

  const botao3 = document.createElement("button");
  botao3.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao3);

  const botao4 = document.createElement("button");
  botao4.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao4);
  
  const botao5 = document.createElement("button");
  botao5.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao5);

  const botao6 = document.createElement("button");
  botao6.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao6);

  const botao7 = document.createElement("button");
  botao7.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao7);

  const botao8 = document.createElement("button");
  botao8.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao8);

  const botao9 = document.createElement("button");
  botao9.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao9);

  const botao10 = document.createElement("button");
  botao10.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao10);

  const botao11 = document.createElement("button");
  botao11.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao11);

  const botao12 = document.createElement("button");
  botao12.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao12);

  const botao13 = document.createElement("button");
  botao13.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao13);

  const botao14 = document.createElement("button");
  botao14.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao14);

  const botao15 = document.createElement("button");
  botao15.className = "btns_escolhas";  
  document.getElementById("container_botoes").appendChild(botao15);
}
