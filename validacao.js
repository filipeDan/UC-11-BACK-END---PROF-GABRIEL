import Joi from "joi";

export const modeloCarro = Joi.object({  //vai ser um PUT, tudo é obrigatório

    nome: Joi.string().min(3).required(), // required = obrigatorio ter um nome 
    //min= tres caracteres, ele não vai deixar ser menos que 3.

    sigla: Joi.string().length(3).required(),//length ela obriga ser 3 letras

    potencia: Joi.number().min(1).required(),

    velocidadeMaxima: Joi.number().min(1).required(),

    consumo: Joi.number().min(0.1).required(),

    aceleracao: Joi.number().min(1).required(),

    preco: Joi.number().min(0).required(),


});

export const modeloAtualizacaoCarro= Joi.object({ // não é obrigatorio, é opção

    nome: Joi.string().min(3).required(),
    sigla: Joi.string().length(3).required(),
    potencia: Joi.number().min(1).required(),
    velocidadeMaxima: Joi.number().min(1).required(),
    aceleracao: Joi.number().min(1).required(),
    preco: Joi.number().min(0).required(),
    consumo: Joi.number().min(0.1).required(),
    //ano: Joi.number().integrar().min(1886).max(new Date().getFullYear()), // esta pegando em um ano para o ano atual 
}).min(1);