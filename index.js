const Sequelize = require('sequelize');

// Configuração do Sequelize
const sequelize = new Sequelize('test', 'root', '6cfcf526', {
  host: 'localhost',
  dialect: 'mysql',
});

// Definição do modelo Postagem
const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

// Definição do modelo Usuario
const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER, // 'idade' é definido como um número inteiro
  },
  email: {
    type: Sequelize.STRING,
  },
});

// Sincronizar o modelo Postagem
Postagem.sync({ force: true })
  .then(() => {
    console.log('Tabela Postagens criada com sucesso!');
    // Criar uma postagem após a sincronização
    return Postagem.create({
      titulo: 'Qualquer coisa',
      conteudo: 'Conteúdo',
    });
  })
  .then(() => {
    console.log('Postagem criada com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao criar tabela Postagens ou inserir dados:', error);
  });

// Sincronizar o modelo Usuario
Usuario.sync({ force: true })
  .then(() => {
    console.log('Tabela Usuarios criada com sucesso!');
    // Inserir dados na tabela Usuario
    return Usuario.create({
      nome: 'Lucas',
      sobrenome: 'Santos',
      idade: 23,
      email: 'lucas.santos@gmail.com',
    });
  })
  .then(() => {
    console.log('Usuario criado com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao criar tabela Usuarios ou inserir dados:', error);
  });
