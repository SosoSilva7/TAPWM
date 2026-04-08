function jogar(escolhaUs){
    let op = ["pedra", "papel", "tesoura"] 

    let escolhaC = op[Math.floor(Math.random()*3)];
    let result = "";

    if(escolhaUs === escolhaC){
        result = "Empate";
    }
    else if((escolhaUs === "pedra" && escolhaC === "tesoura" ) || (escolhaUs === "tesoura" && escolhaC === "papel") || (escolhaUs === "papel" && escolhaC === "pedra")){
        result ="você ganhou o game"
    }
    else{
        result ="você perdeu" 
    }

    document.getElementById("result").innerText = result;
}