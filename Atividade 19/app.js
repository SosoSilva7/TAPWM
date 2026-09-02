//let express = require('express');// SÃO MÓDULOS, É UMA COLEÇÃO DE FUNÇÕES E OBJETOS
//let app = express(); //executamdo o express
//app.set('view engine', 'ejs')


//Incluindo novo modulo texto e app
let texto = require('./modulo1')
let app = require('./app/config/server')

let rotaAdicionarUsuario = require('./app/routes/adicionar_usuario')
rotaAdicionarUsuario(app);

let rotaCursos = require('./app/routes/cursos')
rotaCursos(app);

let rotaHistoria = require('./app/routes/historia')
rotaHistoria(app);

let rotaHome = require('./app/routes/home')
rotaHome(app);

let rotaProfessores = require('./app/routes/professores')
rotaProfessores(app);


app.listen(3000, function(){ //o servidor de app.js vai responder na porta 3000
    console.log("Olá servidor foi carregado");
    
});
/*
ROTAS ANTIGAS

app.get('/', function(req, res){
    res.render("home/index")
    //res.send("<html><body>Site da Fatec Sorocaba</body></html>");
});
app.get('/formulario_adicionar_usuario', function(req, res){ //oq é digitado na URL
    res.render("admin/adicionar_usuarios");//oq o sistema responde 
});
app.get('/informacao/historia', function(req, res){
    res.render("informacao/historia");
});
app.get('/informacao/cursos', function(req, res){
    res.render("informacao/cursos");
});
app.get('/informacao/professores', function(req, res){
    res.render("informacao/professores");
});
app.get('/historia', function(req, res){
    res.render("secao/historia");
});

app.get('/cursos', function(req, res){
    res.render("secao/cursos");
});

app.get('/professores', function(req, res){
    res.render("secao/professores");
});
*/