class Conta{

    constructor(){
        this.nome = "";
        this.banco = "";
        this.numeroConta = "";
        this.saldo = "";
    }

    setNome(nome){
        this.nome = nome;
    }

    getNome(){
        return this.nome;
    }

    setBanco(banco){
        this.banco = banco;
    }

    getBanco(){
        return this.banco;
    }

    setNumeroConta(numeroConta){
        this.numeroConta = numeroConta;
    }

    getNumeroConta(){
        return this.numeroConta;
    }

    setSaldo(saldo){
        this.saldo = saldo;
    }

    getSaldo(){
        return this.saldo;
    }
}



class Corrente extends Conta{

    constructor(){
        super();
        this.saldoEspecial = "";
    }

    setSaldoEspecial(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    }

    getSaldoEspecial(){
        return this.saldoEspecial;
    }
}



class Poupanca extends Conta{

    constructor(){
        super();
        this.juros = "";
        this.dataVencimento = "";
    }

    setJuros(juros){
        this.juros = juros;
    }

    getJuros(){
        return this.juros;
    }

    setDataVencimento(data){
        this.dataVencimento = data;
    }

    getDataVencimento(){
        return this.dataVencimento;
    }
}



function criarCorrente(){

    const contaCorrente = new Corrente();

    contaCorrente.setNome(document.getElementById("nomeC").value);
    contaCorrente.setBanco(document.getElementById("bancoC").value);
    contaCorrente.setNumeroConta(document.getElementById("numeroC").value);
    contaCorrente.setSaldo(document.getElementById("saldoC").value);
    contaCorrente.setSaldoEspecial(document.getElementById("saldoEspecial").value);

    document.getElementById("resultado").innerHTML += `
        <h3>Conta Corrente</h3>

        Nome: ${contaCorrente.getNome()} <br>
        Banco: ${contaCorrente.getBanco()} <br>
        Número da Conta: ${contaCorrente.getNumeroConta()} <br>
        Saldo: ${contaCorrente.getSaldo()} <br>
        Saldo Especial: ${contaCorrente.getSaldoEspecial()} <br><br>
    `;
}



function criarPoupanca(){

    const contaPoupanca = new Poupanca();

    contaPoupanca.setNome(document.getElementById("nomeP").value);
    contaPoupanca.setBanco(document.getElementById("bancoP").value);
    contaPoupanca.setNumeroConta(document.getElementById("numeroP").value);
    contaPoupanca.setSaldo(document.getElementById("saldoP").value);
    contaPoupanca.setJuros(document.getElementById("juros").value);
    contaPoupanca.setDataVencimento(document.getElementById("vencimento").value);

    document.getElementById("resultado").innerHTML += `
        <h3>Conta Poupança</h3>

        Nome: ${contaPoupanca.getNome()} <br>
        Banco: ${contaPoupanca.getBanco()} <br>
        Número da Conta: ${contaPoupanca.getNumeroConta()} <br>
        Saldo: ${contaPoupanca.getSaldo()} <br>
        Juros: ${contaPoupanca.getJuros()} <br>
        Data de Vencimento: ${contaPoupanca.getDataVencimento()} <br><br>
    `;
}