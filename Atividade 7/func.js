
function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

function ordemCrescente(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}


function ehPalindromo(str) {
    if (!str) return false;

    let limpa = str.toLowerCase().replace(/\s+/g, "");
    let invertida = limpa.split("").reverse().join("");

    return limpa === invertida;
}

function verificarSubconjunto(p1, p2) {
    if (!p1 || !p2) return "erro";

    if (p1.includes(p2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}


function diaSemana(data) {
    if (!data) return "Data inválida";

    let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let d = new Date(data);

    return dias[d.getDay()];
}


function mostrarMaior() {
    let a = parseFloat(n1.value);
    let b = parseFloat(n2.value);
    let c = parseFloat(n3.value);

    resNum.innerHTML = "Maior: " + maiorNumero(a, b, c);
}

function mostrarOrdem() {
    let a = parseFloat(n1.value);
    let b = parseFloat(n2.value);
    let c = parseFloat(n3.value);

    resNum.innerHTML = "Ordem: " + ordemCrescente(a, b, c).join(", ");
}

function verificarPalindromoUI() {
    resPal.innerHTML = ehPalindromo(texto.value)
        ? "É palíndromo"
        : "Não é palíndromo";
}

function verificarSubUI() {
    resSub.innerHTML = verificarSubconjunto(p1.value, p2.value);
}

function mostrarDia() {
    resData.innerHTML = "Dia: " + diaSemana(data.value);
}