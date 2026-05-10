const express = require('express');
const validarSenha = require('./middleware');
const roteadores = require('./routers');

const app = express();
app.use(express.json());
app.use(validarSenha);
app.use(roteadores);

app.listen(3000)
