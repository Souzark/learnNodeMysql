const mysql = require('mysql2');
require('dotenv').config(); // Carregar as variáveis do arquivo .env

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // O host do banco de dados
  user: process.env.DB_USER, // O usuário para acessar o banco
  password: process.env.DB_PASSWORD, // A senha do banco de dados
  database: process.env.DB_NAME, // O nome do banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados MySQL!');
});

module.exports = connection;
