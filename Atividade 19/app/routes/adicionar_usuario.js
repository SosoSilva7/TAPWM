//CRIANDO MODULO PARA ROTA 

module.exports = function (app){
    app.get('/formulario_adicionar_usuario', function(req, res){ //oq é digitado na URL
    res.render("admin/adicionar_usuarios");//oq o sistema responde 
});
}