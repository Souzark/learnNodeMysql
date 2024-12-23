require('dotenv').config(); // Carrega o .env
var express = require('express');
const db = require('./database'); // Importa o database.js
const app = express();

// Testa a conexão com o banco de dados no início
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1); // Encerra o processo em caso de erro
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  }
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/Sobre', function (req, res) {
  res.sendFile(__dirname + '/html/sobre.html');
});

app.get('/blog', function (req, res) {
  res.sendFile(__dirname + '/html/blog.html');
});

app.get('/ola/:nome/:cargo', function (req, res) {
  res.send(
    '<h3>Olá<h3> ' +
      req.params.nome +
      '<h2>Seu cargo é </h2>' +
      req.params.cargo
  );
});

// Teste de conexão com o banco
app.get('/database', (req, res) => {
  db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco:', err);
      res.status(500).send('Erro ao conectar ao banco de dados');
    } else {
      console.log('Consulta ao banco bem-sucedida:', results[0].solution);
      res.send(
        'Conexão com o banco de dados está funcionando! Resultado: ' +
          results[0].solution
      );
    }
  });
});

// Inicia o servidor
app.listen(3000, function () {
  console.log('Servidor local 3000 está online');
});
