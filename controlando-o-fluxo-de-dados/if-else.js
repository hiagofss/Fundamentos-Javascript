const frutaExistenteNoMercado = false;
let temCPUSuficente = true;

const args = process.argv;
const saldo = args[args.length - 1];
console.log('Args: ', args);
console.log('Saldo: ', saldo);
if (isNaN(saldo)) {
  console.log('Valor invalido!!!');
  return;
}

let tipoCliente = 'Premium';
if (saldo < 10) {
  tipoCliente = 'Basic';
} else if (saldo >= 10 && saldo < 20) {
  tipoCliente = 'Gold';
} else {
  tipoCliente = null;
}

if (!tipoCliente) {
  tipoCliente = 'Indefinido';
}

console.log('tipoCliente', tipoCliente);

const operadorOu = 1 > 2 || 2 > 1;
const operadorE = 1 === 2 && 2 !== 1;
const operadorNot = !(1 === 1);

const idade = 19;
const resultado = idade >= 18 ? 'Pode Dirigir!' : 'Não pode dirigir!';
console.log(resultado);

const item = !0 ? '2a' : '3b';
console.log(item);

const result = 1
  ? null || (1 != '1' ? 'Hello world!' : 'Hackerzao')
  : 'não zero';
console.log(result);

const valor = 5;

if (valor < 2 || valor > 4) {
  console.log('Entrou no if');
} else if (valor < 5) {
  console.log('Entrou no else-if');
} else {
  console.log('Entrou no else');
}

const item2 = 'abc';
console.log(isNaN(item2) ? 'Hey jude' : 'Hey Julia');

const item3 = '0';
console.log(!!item3);
