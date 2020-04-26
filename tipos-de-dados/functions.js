function nomeDaFuncao(params) {}

function queDiaEHoje() {
  const date = new Date();
  console.log('Hoje é dia: ', date.getDate());
}

function sum(value1, value2) {
  console.log(`A soma de  ${value1} + ${value2} é `, value1 + value2);
}
function sub(value1, value2) {
  return value1 + value2;
}

queDiaEHoje();

sum(5, 2);
console.log('Resultado', sub(9, 9));

function mult(value1, value2) {
  const resultado = value1 * value2;
  return resultado;
}
console.log('Resultado da multiplicação: ', mult(9, 9));

const func1 = {
  nome: 'Joao',
  desconto: 0.2,
  salarioBruto: 2000,
  salarioLiquido: 0,
};

const func2 = {
  nome: 'Mari',
  desconto: 0.5,
  salarioBruto: 2000,
  salarioLiquido: 0,
};

function calculaSalarioLiquido(funcionario) {
  return (
    funcionario.salarioBruto - funcionario.salarioBruto * funcionario.desconto
  );
}

console.log(calculaSalarioLiquido(func1));
console.log(calculaSalarioLiquido(func2));
