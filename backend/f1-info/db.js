const Sequelize = require("sequelize");
const CircuitsModel = require("./models").circuits

const sequelize = new Sequelize('f1_info','mysql','jpal0598deser',{
    host:'localhost',
    dialect: 'mysql'
});




sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

const Circuit = new CircuitsModel(sequelize, Sequelize);

sequelize.sync({
    force: true
})
.then(() => {
    console.log("Sincronizated Tables")
})

module.exports = {
  Circuit
}