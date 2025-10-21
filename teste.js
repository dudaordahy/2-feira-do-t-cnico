const inputFoto = document.getElementById('inputFoto');
const btnAlterar = document.getElementById('btnAlterar');
const imagemPreview = document.getElementById('imagemPreview');

btnAlterar.addEventListener('click', () => {
  inputFoto.click(); // abre o seletor de arquivos
});

inputFoto.addEventListener('change', () => {
  const arquivo = inputFoto.files[0];
  if (arquivo) {
    const leitor = new FileReader();

    leitor.onload = function(e) {
      imagemPreview.src = e.target.result; // mostra a imagem selecionada
    };

    leitor.readAsDataURL(arquivo); // converte o arquivo em base64
  }
});
