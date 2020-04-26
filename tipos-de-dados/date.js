const dataAniversario = new Date(1998, 10, 29);
console.log(dataAniversario);

const primeiroDataJS = new Date(0);
console.log(primeiroDataJS);

const hoje = new Date();
console.log(hoje.toString());
console.log(hoje.toLocaleString());
console.log(hoje.toISOString()); // Formato globa recomendado

const dia = hoje.getDate();
hoje.setDate(dia + 5); // Adiciona +5 dias a data atual
hoje.setHours(10, 11, 12); // Adiciona +5 dias a data atual
console.log(`
Day: ${hoje.getDate()}
Month: ${hoje.getMonth()}
Year: ${hoje.getFullYear()}
Hours: ${hoje.getHours()}
Minutes: ${hoje.getMinutes()}
Seconds: ${hoje.getSeconds()}
`);

console.log(new Date(1998, 10, 29) < new Date());
