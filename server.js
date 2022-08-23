/*
Principais Códigos de Resposta HTTP

 - 200 (OK), requisição atendida com sucesso;
 - 201 (CREATED), objeto ou recurso criado com sucesso;
 - 204 (NO CONTENT), objeto ou recurso deletado com sucesso;
 - 400 (BAD REQUEST), ocorreu algum erro na requisição (podem existir inumeras causas);
 - 404 (NOT FOUND), rota ou coleção não encontrada;
 - 500 (INTERNAL SERVER ERROR), ocorreu algum erro no servidor.

 Restante dos comandos em 'https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status'.

 node server.js
 dev executa nodemon server.js
 npm run dev
*/
import app from './src/app.js'

const port = 3000 || process.env.PORT;



app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
})