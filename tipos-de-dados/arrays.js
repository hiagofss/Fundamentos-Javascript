const minhaLista = [];
const minhaListaDeTarefas = [
  'Mandar e-mail',
  'Colocar comida para o dog',
  'Limpar o quarto',
];

console.log(minhaListaDeTarefas[0]);
console.log(minhaListaDeTarefas[1]);
console.log(minhaListaDeTarefas[2]);

console.log(minhaListaDeTarefas.length);

minhaListaDeTarefas.push('Formatar o computador');

console.log(minhaListaDeTarefas.length);

// Remove o ultimo item da lista
const ultimoItem = minhaListaDeTarefas.pop();
console.log(ultimoItem, minhaListaDeTarefas);

// Remove o ultimo item da lista
const primeiroItem = minhaListaDeTarefas.shift();
console.log(primeiroItem, minhaListaDeTarefas);

minhaListaDeTarefas.splice(2, 1);

console.log(minhaListaDeTarefas);

const items = [1, 'Computador', 0.22];

// Verificar se é um array
console.log(Array.isArray(items));
// Verificar o tipo do array
console.log(typeof items);

// Ordenar
const numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const caracters = ['f', 'd', 's', 'a'];
console.log(numeros.sort());
console.log(caracters.sort());

const novoArray = items.concat([1, 2, 3]);
console.log(novoArray);

//Juntar array em uma string
console.log(items.join('/'));

// Verificar indice do array
const index = items.indexOf('Computador');
console.log(items[index]);
