import express from 'express';
import rotaDeLivros from './livroRoutes.js';
import rotaDeAutores from './autorRoutes.js';

// Fazendo com que o express use a rota '/'
// Fazendo com que o express se o JSON e tambèm use as outras rotas que criamos o livriRoutes
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Curso de Node'});
    });

    app.use(express.json(), rotaDeLivros, rotaDeAutores);
}

export default routes;
