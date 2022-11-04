import express from 'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js';

// Fazendo a conexão com o banco
// Caso dê erro, retorne um erro no terminal
// Caso não dê erro, execute a função once com o argumento 'open' que faz a conexão
db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
    console.log("A conexão com o banco foi feita com sucesso");
});

// Criando uma instância do express
// Fazendo o express usar o JSON
const app = express();
app.use(express.json());

// ROTA GET
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
});

// Pelo método 'find()' é possível puxar todos os resultandos armazenados no banco
app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros);
    });
});

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.send(livros[index]);
});

// ROTA POST
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
});

// ROTA PUT
app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

// ROTA DELETE
app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
});


// Encontrando um livro pelo seu índice
function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;
