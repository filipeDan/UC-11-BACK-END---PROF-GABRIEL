#API DE CARROS -WEBAPI

ESTA É UMA API RESTFUL DESENVOLVIDA PARA O GERENCIAMENTO DE INFORMAÇÕES DE CARROS, UTILIZANDO **NODE.JS** E **EXPRESS**. A API PERMITE CRIAR, LER, ATUALIZAR E EXCLUIR CARROS, COM VALIDAÇÃO DE DADOS UTILIZANDO A BIBLIOTECA **JOI**.
ESTE É UM PROJETO INICIAL DE CRUD (CREAD, READ, UPDATE, DELETE), QUE SERA EXPANDIDO NO FUTURO. ESTE É APENA UM ESCOPO INICIAL.
## FUNCIONALIDADES

-**GET /**; RETORNA LISTA COMPLETA DE CARROS.
-**GET /**; RETORNA AS INFORMAÇÕES DE UM CARROS ESPECIFICOS. INDENTIFICADO PELA SIGLA.
-**POST /**; ADICIONA UM NOVO CARRO NA LISTA.
-**PUT /**; ATUALIZA AS INFORMAÇÕES DE UM CARRO ESPECIFICO IDENTIFICADO PELA SIGLA.
-**DELETE /**; REMOVE UM CARRO ESPECIFICO PELA SIGLA.

## ESTRUTURA DO PROJETO

-**APP.JS**; CONTÉM A LISTA DE CARROS (DADOS FICTICIOS).
-**VALIDAÇÃO.JS**; CONTEM AS VALIDAÇÕE SO JOI PARA OS DAOS DOS CARROS.

## ENDPOITS

### 1. **GET /**

RETORNA A LISTA COMPLETA DE CARROS DISPONIVEIS.

#### EXEMPLOS DE RESPOSTAS

``` json
[
    {
        "nome": "ferrari",
        "sigla": "FER",
        "velocidadeMaxima": 340,
        "potencia": 800,
        "consumo": 5.5,
        "aceleracao": 2.9,
        "preco": 30000

    },
]
```