const express = require('express'); // Todas funcionalidades do express
const cors = require('cors')
const routes = require('./routes')

const app = express(); // Cria a aplicação

app.use(cors()); //Define quem poderá acessar o backend
app.use(express.json()) // Mostra que usará JSON
app.use(routes)
            
app.listen(3333); // Ouve a porta 3333