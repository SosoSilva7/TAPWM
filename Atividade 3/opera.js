function opera(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let soma = num1 + num2;
    let sub = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;
    let resto = num1 % num2;

    document.getElementById("result").innerText =(
        "Soma: " + soma + "\n" +
        "Subtração: " + sub + "\n" +
        "Multiplicação: " + mult + "\n" +
        "Divisão: " + div + "\n" +
        "Resto: " + resto);
}