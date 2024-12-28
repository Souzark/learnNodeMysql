require = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// Configuração do Handlebars  
    //template engine
    app.engine('handlebars', handlebars({defaultLayout:'main'});
    app.set('view engine', 'handlebars');
    // Configuração do Sequelize
const sequelize = new Sequelize('test', 'root', '6cfcf526', {
    host: 'localhost',
    dialect: 'mysql',
  });
  


app.listen(8081, function(){
        console.log('Servidor rodando na url http://localhost:8081');
    });