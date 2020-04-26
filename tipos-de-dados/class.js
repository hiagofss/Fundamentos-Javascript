class Heroi {
  atacar() {
    console.log('Atacou');
  }
  defender() {
    console.log('Defendeu');
  }
}

const heroi = new Heroi();
heroi.atacar();
heroi.defender();

//

class Heroi2 {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  atacar() {
    console.log(`O ${this.nome} atacou!!!`);
  }
}

const heroi2 = new Heroi2('Flash', 20);
heroi2.atacar();

//

class Heroi3 {
  static obterAnoNascimentoNascimento(idade) {
    return 2020 - idade;
  }
}

const anoDeNascimento = Heroi3.obterAnoNascimentoNascimento(20);

console.log(`O ano de nascimento é ${anoDeNascimento}`);

//

class Test {
  static hello() {
    console.log('Olá');
  }
}

Test.hello();
Test['hello']();
