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
import routes from "./routes/index.js"


db.on("error", console.log.bind(console, 'Erro de conecção!!!'));
db.once("open", () => {
    console.log("Coneção feita com sucesso!");
});

const app = express(); // Criando instancia do server
app.use(express.json()); // Fazendo a portabilidade do arquivo json
routes(app); // // Utilizando as rotas do app


export default app;