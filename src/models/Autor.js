import moongose from "mongoose";


const autorSchema = new moongose.Schema(
    {
    id: {type: String},
    nome: {type: String, required: true},
    nacionalidade: {type: String}
    }, 
    {versionKey: false}
);

const autores = moongose.model('autores', autorSchema);

export default autores;
