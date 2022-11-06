import mongoose from "mongoose";

// Criando um novo Scheme do banco, onde definimos entre chaves seus respectivos atributos e entre chaves novamente, os tipos dos mesmos
// A chave 'required' significa que é um campo obrigatório (true)
const livroSchema = new mongoose.Schema(
    {        
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
);

// Criando um novo modelo chamado livros com base no Schema que criamos acima, passamos o Schema como argumento
const livros = mongoose.model('livros', livroSchema);

export default livros;
