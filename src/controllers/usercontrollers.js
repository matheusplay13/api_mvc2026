const connection = require("../config/database");

//get all users
exports.getAllUsers = async (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
}

//post new user
exports.createUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    const query = 'INSERT INTO users (nome, email, senha_hash) VALUES (?, ?, ?)';
    
    connection.query(query, [nome, email, senha], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ 
            id: result.insertId, 
            nome, 
            email, 
            senha_hash: senha 
        });
    });
}

exports.delete = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    
    connection.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Usuario nao encontrado" });
        }
        res.json({ message: "Usuario deletado com sucesso" });
    });
}