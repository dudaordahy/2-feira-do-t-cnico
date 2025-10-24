<?php
// upload da foto
$target_dir = "../contents/perfil/";
$target_file = $target_dir . basename($_FILES["fotoPerfil"]["name"]);

move_uploaded_file($_FILES["fotoPerfil"]["tmp_name"], $target_file);

// capturar a distancia
$distancia = $_POST[''];
// dados do usuario

// atualizar dados do usuario no banco
$sql = "UPDATE  SET Distacia = , Imagem =  WHERE UsuarioID = ".$_SESSION['Usuario']['UsuarioID'];
mysqli_query($conexao,$sql);
// pegas a preferencias

// excluir as preferencias do usuario

// salva as preferencias do usuario

// rediceriona para pagina index
?>