const Sequelize = require('sequelize');

// Configuração do Sequelize
const sequelize = new Sequelize('postapp', 'root', '6cfcf526', {
    host: 'localhost',
    dialect: 'mysql',
});

// Testando a conexão
sequelize.authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao conectar no banco de dados:', error);
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
