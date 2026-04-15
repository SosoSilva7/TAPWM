let pessoas = [];

function adicionarPessoa() {
  const idade = +document.getElementById("idade").value;
  const sexo = document.getElementById("sexo").value;
  const opiniao = +document.getElementById("opiniao").value;

  

  pessoas.push({ idade, sexo, opiniao });
  document.getElementById("idade").value = "";
}

function calcular() {
  if (!pessoas.length) return;

  let soma = 0,
      maisVelha = -Infinity,
      maisNova = Infinity,
      pessimo = 0,
      otimoBom = 0,
      homens = 0,
      mulheres = 0,
      outros = 0;

  pessoas.forEach(p => {
    soma += p.idade;
    maisVelha = Math.max(maisVelha, p.idade);
    maisNova = Math.min(maisNova, p.idade);

    if (p.opiniao === 1) pessimo++;
    if (p.opiniao >= 3) otimoBom++;

    if (p.sexo === "masculino") homens++;
    else if (p.sexo === "feminino") mulheres++;
    else outros++;
  });

  const media = soma / pessoas.length;
  const porcentagem = (otimoBom / pessoas.length) * 100;

  document.getElementById("resultado").innerHTML = `
    Média: ${media.toFixed(2)} <br>
    Mais velha: ${maisVelha} <br>
    Mais nova: ${maisNova} <br>
    Péssimo: ${pessimo} <br>
    Ótimo/Bom: ${porcentagem.toFixed(2)}% <br>
    Homens: ${homens}, Mulheres: ${mulheres}, Outros: ${outros}
  `;
}