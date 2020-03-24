const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
** Entidades: ONG e Casos(incident)
**Funcionaludades: Login, cadastro, logout, cadastrar novos casos, deletar casos, listar casos específicos de uma ONG
* mobile: listar todos os casos, contato com a ong
*/

/*
**Rota / recurso
*/

/*
**Métodos HTTP
*
*GET: Buscar/listar informações do Back-end
*POST: Criar infomação do Back-end
*PUT: Alterar ifnormação do Back-end
*DELETE: Deletar uma informação do Back-end
*/

/*
**Tipos de Parâmetros
*
*Query Params: Parâmetros nomeados enviados na rota apos a "?". (Filtros, Paginação)
*Route Params: Parâmetros usados para identificar recursos.
*Request Body: Corpo da requisção, para criar ou alterar recursos.
*/

/*
** SQL: MySQL, Microsoft SQLServer, SQLite, Oracle, PostgreSQL
** NoSQL: MongoDB, CouchDB, etc. 
*/

/*
* Driver: SELECT * FROM Users
* Query Builder: table('users').select('*').where()  //KNEX.js
*/



app.listen(3333);