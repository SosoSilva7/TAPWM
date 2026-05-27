function Retangulo(x,y){
    this.x = x;
    this.y = y;

    this.Calcular = function(){
        var area = this.x * this.y;
        alert("A area do retangulo é: " + area);
    }
}

function calcularArea(){

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    const retangulo = new Retangulo(x, y);

    retangulo.Calcular();
}
