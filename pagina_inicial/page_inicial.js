// colecao de preferencias do usuario
const colecaoPreferencias =[{
  nome: "Gastro",
  imagem: "prefGastro.png"
},{
  nome: "Esporte",
  imagem: "prefEsportes.png"
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

window.sr = ScrollReveal({reset: true});
sr.reveal(container, {duration: 2500});

const btnFoto = document.getElementById('btn_foto_perfil');
let imgFoto = document.getElementById('img_foto_perfil');

window.addEventListener('load', () => {
  const imgSalva = localStorage.getItem(imgFoto);
  if(imgSalva){
    imgSalva.src = imgSalva;
  }
})

btnFoto.addEventListener('click', () => {
  imgFoto.click(); // abre o seletor de arquivos
});

imgFoto.addEventListener('change', () => {
  const arquivo = imgFoto.files[0];
  if (arquivo) {
    const leitor = new FileReader();

    leitor.onload = function(e) {
      const imagemBase64 = e.target.result;
      imgFoto.src = imagemBase64;

      // 💾 Salva a imagem no LocalStorage
      localStorage.setItem(imgFoto, imagemBase64);
    };

    leitor.readAsDataURL(arquivo); // converte a imagem para Base64
  }
});

function proximaPagina(){
  txt_container.remove();
  btn_foto.remove();

  const texto = document.createElement("h1");
  texto.innerHTML = "Escolha suas preferencias";
  texto.id = "txt_escolha_preferencias";
  document.getElementById("container_escolhas").appendChild(texto);

  const div_botoes = document.createElement("div")
  div_botoes.id = "container_botoes_preferencias";
  document.getElementById("container_escolhas").appendChild(div_botoes);

  const botao = document.createElement("button");
  botao.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao);

  const botao1 = document.createElement("button");
  botao1.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao1);

  const botao2 = document.createElement("button");
  botao2.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao2);

  const botao3 = document.createElement("button");
  botao3.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao3);

  const botao4 = document.createElement("button");
  botao4.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao4);
  
  const botao5 = document.createElement("button");
  botao5.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao5);

  const botao6 = document.createElement("button");
  botao6.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao6);

  const botao7 = document.createElement("button");
  botao7.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao7);

  const botao8 = document.createElement("button");
  botao8.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao8);

  const botao9 = document.createElement("button");
  botao9.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao9);

  const botao10 = document.createElement("button");
  botao10.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao10);

  const botao11 = document.createElement("button");
  botao11.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao11);

  const botao12 = document.createElement("button");
  botao12.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao12);

  const botao13 = document.createElement("button");
  botao13.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao13);

  const botao14 = document.createElement("button");
  botao14.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao14);

  const botao15 = document.createElement("button");
  botao15.className = "btns_preferencias";  
  document.getElementById("container_botoes_preferencias").appendChild(botao15);
}
