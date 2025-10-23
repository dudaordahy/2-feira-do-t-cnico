function voltarPagina(){
    window.location.href = "../pagina_inicial/page_inicial.html";
}


function mostrarPersonalizacao(){
    let container = document.getElementById('conteudo');
    let titulo = document.getElementById('titulo');
    let texto = document.getElementById('txt_principal');
    
    titulo.innerHTML = 'Personalização';
    texto.innerHTML = 'A personalização do site permite que o usuário adapte a aparência e o funcionamento da plataforma conforme suas preferências. É possível alternar entre temas claro e escuro, ajustar configurações de conta e escolher como deseja interagir com o conteúdo, tornando a experiência mais confortável e única.';

    
}

