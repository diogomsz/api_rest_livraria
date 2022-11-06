import livros from '../models/Livro.js';

class LivroController {
    // Este método mostra todos os livros do BD
    // Pelo método 'find()' é possível puxar todos os resultandos armazenados no banco
    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros);
            });
    };

    // Este método mostra um livro específico do BD
    // Pelo método 'findById()' é possível puxar do BD o livro que possui aquele id específico passado como parâmetro da requisição
    static listarLivroPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
                if(err) {
                res.status(400).send({message: `${err.message} - Id do livro não localizado.`}); 
                } else {
                    res.status(200).send(livros);
                }
            });
    };

    // Buscando um Livro pelo nome da editora
    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({"editora": editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        });
    };

    // Cadastrando um livro
    // Pelo método 'save()' é possível inserir um livro no BD
    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    };

    // Atualiza os dados de um livro existente no banco
    // Pelo método 'findByIdAndUpdate()' é possível encontrar um livro pelo id e atualizar com base nos dados passados no corpo da requisição
    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso'});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    };

    // Apaga um livro específico pelo id
    // Pelo método 'findByIdAndDelete()' é possível encontrar um livro pelo id passado nos parâmetros da requisição e deletar
    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro removido com sucesso.'});
            } else {
                res.status(500).send({message: err.message});
            }
        })
    };
}

export default LivroController;
