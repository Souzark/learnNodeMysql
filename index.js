const Sequelize = require('sequelize');

// Corrigido: parâmetros bem formatados
const sequelize = new Sequelize('test', 'root', '6cfcf526', {
  host: 'localhost',
  dialect: 'mysql'
});


const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

const Usuario = sequelize.define('usuarios', {
nome: {
    type: Sequelize.STRING
},
sobrenome: {
    type: Sequelize.STRING
},
idade: {
    type: Sequelize.INTEGER
},
email: {
    type: Sequelize.STRING
}
});

Postagem.sync({ force: true })
  .then(() => {
    console.log('Tabela criada com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao criar tabela:', error);
  });


Usuario.sync({ force: true }) // force: true força a criação da tabela