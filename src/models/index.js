const connection = require('../config/database');

// Criar tabela users se não existir
const createTable = () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            senha_hash VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    
    connection.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Erro ao criar tabela users:', err);
        } else {
            console.log('Tabela users verificada/criada com sucesso');
        }
    });
};

createTable();

module.exports = {
    connection
};

