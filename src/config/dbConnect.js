import mongoose from "mongoose";

// Inserindo a URI  de conexão como argumento do método 'connect'
mongoose.connect('mongodb+srv://alura:123@alura.mrtx9yn.mongodb.net/alura-node?');

// Fazendo a conexão com  o termo 'connection' com o MongoDB
let db = mongoose.connection;

export default db;
