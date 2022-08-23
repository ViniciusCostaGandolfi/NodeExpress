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
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, 'Erro de conecção!!!'));
db.once("open", () => {
    console.log("Coneção feita com sucesso!");
});

const app = express(); // Criando instancia do server
app.use(express.json()); // Fazendo a portabilidade do arquivo json

// Criando vertor base de livros
const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
];

// Método get inicial da livaria
app.get('/', (req, res) => {
    res.status(200).send('Gandolfi Livraria');
})

// Criando um retorno do JSON dos livros cadastrados
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

// Requisição por ID
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})

// Método PUSH para adicionar um novo livro
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('O livro foi cadastrado com sucesso!');
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})


app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.status(200).send(`O livro ${livros[index]['titulo']} foi removido com sucesso!`);
})


function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}

export default app