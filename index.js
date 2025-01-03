const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const post = require('./models/Post');


// Configuração do Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: false })); // Adiciona suporte para URL-encoded
app.use(express.json()); // Adiciona suporte para JSON

// Rotas
app.get('/cad', function (req, res) {
  res.render('formulario'); // Renderiza o formulário
});


app.get('/', function (req, res) {
  res.render('home'); // Renderiza a home
}
app.post('/add', function (req, res) {
  post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function () {
    res.redirect('/'); // Redireciona para a home
  }).catch(function (error) {
    res.send('Erro ao criar a postagem: ' + error); // Mensagem de erro
  });
});


app.listen(8081, function () {
  console.log('Servidor rodando na url http://localhost:8081'); // Confirmação de que o servidor está rodando
});