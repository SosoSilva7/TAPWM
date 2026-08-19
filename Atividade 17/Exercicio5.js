//criando eventos do lado do servidor, eventos de servidor são as Requests (nada a ver com os eventos do front)
let eventos = require('events');

//atribuição das classe eventEmitter a uma variável 
let EmissorEventos = eventos.EventEmitter;

//criando objeto de emissão de evento
let ee = new EmissorEventos();

//método on é semelhante ao addListener do front qnd vc realciona um evento a um componente
//aqui vc está criando o eu evento
ee.on('dados', function(fecha){
    console.log(fecha);
});

//emissão do evento somente uma vez
ee.emit('dados', 'primeira vez: ' + Date.now());

//emissão do evento a cada 500 milissegundos
setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);

//emit para emitir o evento

