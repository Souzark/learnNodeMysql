const sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root,'6cfcf526', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const Postagem = sequelize.define('postagens', {
    titulo: {
      type: Sequelize.STRING
    },
    conteudo: {
      type: Sequelize.TEXT
    };
  });

  postagem.sync({force: true});
