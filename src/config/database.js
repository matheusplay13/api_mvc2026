const mysql = require('mysql2');
const dbConfig = require('../../db.json');

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }

  console.log('Conectado ao MySQL!');
});

module.exports = connection;
