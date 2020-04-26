let salarioAmigo = 1000;
let meuSalario = '2999.50';
let meuSalarioNaN = '2999aaa';
let meuSalarioCorrigido = Number(meuSalario);

console.log(salarioAmigo + meuSalario);
console.log(salarioAmigo + meuSalarioCorrigido);
console.log(typeof salarioAmigo, salarioAmigo);
console.log(typeof meuSalario, meuSalario);
console.log(isNaN(meuSalarioNaN), meuSalarioNaN);

let minhaString = 'Olá mundo!';
let minhaOutraString = 'Hello World!';
let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString}. AEEE!!!`;
console.log(minhaStringComVariaveis);
