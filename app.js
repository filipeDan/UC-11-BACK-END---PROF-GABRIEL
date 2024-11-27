import carros2024 from'./tabeladecarros.js';
import express from'express';

const app = express();

app.use(express.json());

//get é uma solicitação
app.get('/', (requisicao,resposta) =>{
    resposta.status(200).send(carros2024);
});
// inicia o servidor na porta 3000:
app.listen(3000,() => console.log("Servidor rodando com sucesso"));
// localhost:3000 este é o link para rodar na web

