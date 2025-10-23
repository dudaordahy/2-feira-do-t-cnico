-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/10/2025 às 23:21
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `connect`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `UsuarioID` int(11) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `Sobrenome` varchar(150) NOT NULL,
  `Usuario` varchar(25) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Senha` varchar(16) NOT NULL,
  `CEP` int(8) NOT NULL,
  `Endereco` varchar(150) NOT NULL,
  `Numero` int(5) NOT NULL,
  `Complemento` varchar(100) NOT NULL,
  `Imagem` varchar(255) NOT NULL,
  `Cidade` varchar(150) NOT NULL,
  `Estado` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`UsuarioID`, `Nome`, `Sobrenome`, `Usuario`, `Email`, `Senha`, `CEP`, `Endereco`, `Numero`, `Complemento`, `Imagem`, `Cidade`, `Estado`) VALUES
(1, 'nome', 'sobrenome', 'usuario', 'email@oi.com.br', '123456', 1234567890, 'rua legal', 123, 'bloco v', '', 'porto', 'rs'),
(2, 'Eduarda ', 'Ordahy', 'dudaordahy', 'dudasciortino@gmail.com', 'dudinha2532', 90660280, 'Rua Humberto de Campos', 1196, 'nao', '', 'Porto Alegre', 'RS'),
(3, 'Eduarda ', 'Ordahy', 'dudaordahy', 'dudasciortino@gmail.com', 'dudinha2532', 90660280, 'Rua Humberto de Campos', 1196, 'nao', '', 'Porto Alegre', 'RS');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`UsuarioID`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `UsuarioID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
