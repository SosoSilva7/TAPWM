//LITERAL

let pessoa1 = {
    nome: "João",
    idade: 20,
    hobby: "Tocar violão",

    apresentar: function(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
};

alert(pessoa1.apresentar());



// NEW OBJECT()

let pessoa2 = new Object();

pessoa2.nome = "Maria";
pessoa2.idade = 22;
pessoa2.hobby = "Desenhar";

pessoa2.apresentar = function(){
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
};

alert(pessoa2.apresentar());



// FUNÇÃO CONSTRUTORA

function Pessoa3(nome, idade, hobby){
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;

    this.apresentar = function(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
}

let pessoa3 = new Pessoa3("Duda", 19, "Skate");

alert(pessoa3.apresentar());



// CLASSE

class Pessoa4 {

    constructor(nome, idade, hobby){
        this.nome = nome;
        this.idade = idade;
        this.hobby = hobby;
    }

    apresentar(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
}

let pessoa4 = new Pessoa4("Ana", 21, "Desenhar");

alert(pessoa4.apresentar());



// OBJECT.CREATE()

let modeloPessoa = {

    apresentar: function(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
};

let pessoa5 = Object.create(modeloPessoa);

pessoa5.nome = "Carlos";
pessoa5.idade = 25;
pessoa5.hobby = "Jogar futebol";

alert(pessoa5.apresentar());



// FACTORY FUNCTION

function criarPessoa(nome, idade, hobby){

    return {
        nome,
        idade,
        hobby,

        apresentar(){
            return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
        }
    };
}

let pessoa6 = criarPessoa("Julia", 18, "Ler");

alert(pessoa6.apresentar());