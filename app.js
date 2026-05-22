const express = require('express');
const app = express();
const connection = require('./src/config/database');
require('./src/models'); // Importa para criar a tabela users
const userRoutes = require('./src/routes/userRoutes');

//middleware
app.use(express.json());

//rotas
app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
