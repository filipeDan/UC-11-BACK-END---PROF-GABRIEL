import express from 'express';
import carros2024 from './tabeladecarros.js'; // Presumo que você tenha esse arquivo
// Não precisa importar 'req' e 'res' de 'express/lib', apenas use 'express'

import { modeloCarro, modeloAtualizacaoCarro } from './validacao.js'

const app = express();

app.use(express.json());

// Rota GET para retornar todos os carros
app.get('/', (req, res) => {
    res.status(200).send(carros2024);
});

// Rota GET para buscar um carro específico pela sigla
app.get('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase(); // Obtendo a sigla
    const carro = carros2024.find((infoCarro) => infoCarro.sigla === siglaInformada); // Procurando o carro na tabela
    if (!carro) {
        res.status(404).send('Não existe um carro com a sigla informada!'); // Caso não encontre o carro
        return;
    }
    res.status(200).send(carro); // Caso encontre o carro
});

// Rota POST para adicionar um novo carro
app.post('/', (req, res) => {
    const novoCarro = req.body; // Obtendo os dados do corpo da requisição
    const carroExiste = carros2024.find(carro => carro.sigla === novoCarro.sigla);
    if (carroExiste) {
        return res._construct(400).send('Já existe um carro cadastrado com essa sigla');
    }
    //JOI

    const { error } = modeloCarro.validate(novoCarro);
        if ( error ) {

            res.status (400).send(error);
            return;
        }
    
    carros2024.push(novoCarro); // Adicionando o novo carro à lista
    res.status(201).send(novoCarro); // Retornando o carro adicionado com status 200
});

//JOi


// Rota PUT para atualizar um carro existente
app.put('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const carroSelecionado = carros2024.find(c => c.sigla === siglaInformada);
    
    if (!carroSelecionado) {
        res.status(404).send('Não existe um carro com a sigla informada!');
        return;
    };

    //JOI

    const{ error } = modeloAtualizacaoCarro.validate (req.body); // aqui ele verifica se tem a sigla no Json
    if(error) {
// se houver erro no modelo/validação retorna erro.
        res.status (400).send(error);
        return;
    }
    

    const campos = Object.keys(req.body); // Obtendo os campos a serem atualizados
    for (let campo of campos) {
        carroSelecionado[campo] = req.body[campo]; // Atualizando os campos do carro
    }
    
    res.status(200).send(carroSelecionado); // Retornando o carro atualizado
});
app.delete('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase(); //// Obtendo a sigla informada
    const indiceCarroSelecionado = carros2024.findIndex(
       // findIndex: A função findIndex retorna o índice do primeiro elemento que satisfaz a condição dada. Se o carro com a sigla informada não for encontrado, ela retorna -1.
        (c) => c.sigla === siglaInformada // Encontrando o índice do carro com a sigla informada
    );
        if (indiceCarroSelecionado === -1){// Verificando se o carro existe

            res
            .status(400) // Código de status 400 para erro de solicitação inválida
            .send(
                'Não existe um carro com a sigla informada'
            );
        return;
        };// Removendo o carro encontrado
    const carroRemovido = carros2024.splice(indiceCarroSelecionado, 1); // remove 1 item no índice encontrado
   // splice: O método splice é usado para remover um item de um array, e ele retorna um array com os itens removidos. Como você quer remover apenas um carro, 
   // passamos 1 como o segundo parâmetro para indicar que somente um item será removido.
   
    res.status(200).send(carroRemovido);// Retorna o carro removido com status 200
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => console.log("Servidor rodando com sucesso na porta 3000"));

// node app.js para rodar   