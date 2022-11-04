import app from './src/app.js'; // importando nossa instancia do express

// definindo uma porta do nosso computador para escutar as requisições, 
// ou a porta vai ser a porta do ambiente de producao ou vai ser nossa porta local
const port = process.env.PORT || 3000;

// Fazendo o link entre nosso servidor e a porta que ele vai escutar a requisição
app.listen(port, () => {
    console.log(`Servidor escutando na porta em http://localhost:${port}`);
});
