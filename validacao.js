import Joi from "joi";

export const modeloCarro = Joi.object ({

}) 
    //vai ser um PUT, tudo é obrigatório
    // required = obrigatorio ter um nome 
    //min= tres caracteres, ele não vai deixar ser menos que 3.

    nome: Joi.string().min(3).required().messages({
    'string.min': 'O nome do carro deve ter pelo menos 3 caracteres.',
    'any.required': 'O nome do carro é obrigatório.',
});
    sigla: Joi.string().length(3).required().messages({//length ela obriga ser 3 letras
        'string.length':'A sigla deve ter exatamente 3 caracteres.',
        'any.required': 'A sigla é obrigatória.',
});
    potencia: Joi.number().min(1).required().messages({
    'number.min': 'A potência deve ser maior ou igual a 1.',
    'any.required': 'A potência é obrigatória.'
});
    velocidadeMaxima: Joi.number().min(1).required().messages({
    'number.main': 'A velocidade maxima deve ser exatamente maior ou igual a 1.',
    'any.required': 'A velocidade naxima é obrigatória.',
});
    consumo: Joi.number().min(0.1).required().messages({
    'number.main': 'O consumo deve ser maior  ou igual a 0.1.',
    'any.required': 'O consumo é obrigatório.',
});
    aceleracao: Joi.number().min(1).required().messages({
        'number.main': 'A aceleração deve ser maior ou igual a 0.',
        'any.required':'A aceleração é obrigatória.',
});
    preco: Joi.number().min(0).required().messages({
    'number.main': 'O preço deve ser maior ou igual a 1.',
    'any.required': 'O preço deve ser obrigatório.',

});

export const modeloAtualizacaoCarro= Joi.object({ // não é obrigatorio, é opção

    nome: Joi.string().min(3).required(),
    sigla: Joi.string().length(3).required(),
    potencia: Joi.number().min(1).required(),
    velocidadeMaxima: Joi.number().min(1).required(),
    aceleracao: Joi.number().min(1).required(),
    preco: Joi.number().min(0).required(),
    consumo: Joi.number().min(0.1).required(),
    //ano: Joi.number().integrar().min(1886).max(new Date().getFullYear()), // esta pegando de um ano para o ano atual.
}).min(1);