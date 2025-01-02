CREATE DATABASE IF NOT EXISTS challengedb;
USE challengedb;

-- Criando a tabela 'people'
CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);