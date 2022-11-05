import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

// Fazendo a conexão com o banco
// Caso dê erro, retorne um erro no terminal
// Caso não dê erro, execute a função once com o argumento 'open' que faz a conexão
db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
    console.log("A conexão com o banco foi feita com sucesso");
});

// Criando uma instância do express
const app = express();
routes(app);

export default app;
