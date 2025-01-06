const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const Handlebars = require('handlebars');
const Post = require('./models/Post'); // Certifique-se de que o caminho está correto

// Configuração do Handlebars com acesso às propriedades herdadas
app.engine('handlebars', engine({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
}));
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: false })); // Suporte para URL-encoded
app.use(express.json()); // Suporte para JSON

// Rotas
app.get('/cad', function (req, res) {
  res.render('formulario'); // Renderiza o formulário
});

app.get('/', function (req, res) {
  Post.findAll({
    order: [['createdAt', 'DESC']] // Ordena pelo campo 'createdAt' em ordem decrescente
  })
  .then(function (posts) {
    res.render('home', { posts: posts }); // Envia os posts para o template 'home'
  })
  .catch(function (error) {
    res.send('Erro ao listar as postagens: ' + error);
  });
});

app.get('/deletar/:id', function (req, res) {
  Post.destroy({
    where: { 'id': req.params.id }
  })
  .then(function () {
    res.send('Postagem deletada com sucesso!'); // Mensagem de sucesso
  })
  .catch(function (error) {
    res.send('Erro ao deletar a postagem: ' + error); // Mensagem de erro
  });
});

app.post('/add', function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  })
  .then(function () {
    res.redirect('/'); // Redireciona para a home
  })
  .catch(function (error) {
    res.send('Erro ao criar a postagem: ' + error); // Mensagem de erro
  });
});

// Servidor
app.listen(8081, function () {
  console.log('Servidor rodando na url http://localhost:8081'); // Confirmação
});
