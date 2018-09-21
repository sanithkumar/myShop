const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var util = require("util")
const models = require('./models/index.js')
const DATABASE_URL = util.format(
  "mysql://%s:%s@%s:%s/%s",
  "root",
  "",
  "localhost",
  "3306",
  "nodeDb"
);

var connection = new Sequelize(DATABASE_URL, {
  logging: false,
  operatorsAliases: Op,
  pool: {
    maxConnections: 5,
    maxIdleTime: 30
  }
});

connection.authenticate()
  .then(() => {
  //  syncConnection();
  })

function syncConnection() {
  connection.sync()
    .then(function () {
    }
    )
}