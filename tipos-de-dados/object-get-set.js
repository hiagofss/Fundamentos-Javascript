const pessoa = {
  _nome: '',
  _idade: 21,
  get nome() {
    return this._nome;
  },

  set nome(value) {
    this._nome = value.toUpperCase();
  },

  get podeDirigir() {
    return this._idade >= 18;
  },

  set idade(value) {
    this._idade = value;
  },
};

pessoa.nome = 'JoaoZinho';
console.log(pessoa.nome);
pessoa.idade = 16;

console.log(pessoa.podeDirigir);

const animal = {
  _idade: '123',
  _id: '123',
  get id() {
    return this._id;
  },
  set idade(valor) {
    this._idade = valor;
  },
};

animal.idade = 10;
console.log(animal.idade);
console.log(animal.id);
