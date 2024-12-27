const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '6cfcf526', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Servidor conectado com sucesso');
}).catch(err => {
    console.error('Não foi possível conectar com o servidor', err);
});