function calcular(a, b, c) {
  const soma = a + b + c;
  const quad1 = a * a;
  const quad2 = b * b;

  return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quad1} e o quadrado do segundo é: ${quad2}`;
}

function executarEx1() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);
  const n3 = Number(document.getElementById("n3").value);

  const numeros = [n1, n2, n3];

  const resultado = calcular.apply(null, numeros);

  document.getElementById("resultado1").innerText = resultado;
}

function gerarPalavras(letras) {
  const resultado = [];

  function embaralhar(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  while (resultado.length < 10) {
    const copia = letras.slice();
    const palavra = embaralhar(copia).join('');

    if (!resultado.includes(palavra)) {
      resultado.push(palavra);
    }
  }

  return resultado;
}

function executarEx2() {
  const letras = [
    document.getElementById("l1").value.toUpperCase(),
    document.getElementById("l2").value.toUpperCase(),
    document.getElementById("l3").value.toUpperCase(),
    document.getElementById("l4").value.toUpperCase(),
    document.getElementById("l5").value.toUpperCase()
  ];

  const palavras = gerarPalavras(letras);

  document.getElementById("resultado2").innerText = palavras.join(', ');
}