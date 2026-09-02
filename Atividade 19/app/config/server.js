//MODULARIZANDO O CÓDIGO, deixando as funções de inicialização do servidor como um módulo só, e apenas exportando esse nódulo em app.js


let express = require('express');// SÃO MÓDULOS, É UMA COLEÇÃO DE FUNÇÕES E OBJETOS
let app = express(); //executamdo o express
app.set('view engine', 'ejs')

app.set('views', './app/views');
module.exports = app;