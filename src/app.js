/*
Principais Códigos de Resposta HTTP

 - 200 (OK), requisição atendida com sucesso;
 - 201 (CREATED), objeto ou recurso criado com sucesso;
 - 204 (NO CONTENT), objeto ou recurso deletado com sucesso;
 - 400 (BAD REQUEST), ocorreu algum erro na requisição (podem existir inumeras causas);
 - 404 (NOT FOUND), rota ou coleção não encontrada;
 - 500 (INTERNAL SERVER ERROR), ocorreu algum erro no servidor.

 Restante dos comandos em 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status'.

 node server,js
 dev executa nodemon server.js
 npm run dev
*/

import express from "express";

const app = express();

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

app.get('/', (req, res) => {
    res.status(200).send('Gandolfi Livraria');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

export default app