const db = require ('./db.js');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Post;  

Post.sync({ force: true })
    .then(() => {
        console.log('Tabela criada com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao criar a tabela:', error);
    });