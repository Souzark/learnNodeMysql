const express = require('express');
const app = express();
const { engine } = require('express-handlebars'); // Nova forma de importar o motor do Handlebars
const Sequelize = require('sequelize');

// Configuração do Handlebars  
// Template engine
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Configuração do Sequelize
const sequelize = new Sequelize('test', 'root', '6cfcf526', {
  host: 'localhost',
  dialect: 'mysql',
});

// Rotas
app.get('/cad', function (req, res) {
  res.end('Rota de cadastro de postagem');
});

// Inicialização do servidor
app.listen(8081, function () {
  console.log('Servidor rodando na url http://localhost:8081');
});
