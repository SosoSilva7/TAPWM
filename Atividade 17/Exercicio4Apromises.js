const { readFile } = require('fs');

//função para imprimkir a primeira parte
function Parte1(){
    for(let i = 1; i<=10; i++){
        console.log("primeira parte:" + i);
    };
}
setTimeout(Parte1, 2000); //pra atrasar
const fs = require('fs').promises;//importa a versão com promiseses
fs.readFile('file.txt', 'utf8')// utf8 evita a necessidade do toString
.then(data => {
    const registro = data.split('\n');
    registros.forEach((registro, index) => {
        console.log("segunda parte: " + index + "" + registro);
    });
})
.catch(err => {
    console.error("Erro ao lero arquivo:", err);
})//com a promise vc trata o erro e o sucesso de forma mais simples, evitando callback hell (muitos callbacks no código) 

// a promise serve pra substituir a callback e 
//promise.all pode tratar muitas exeções de uma vez só
//verbo .then usado pra qnd é sucesso 
//verbo Catch qnd dá erro