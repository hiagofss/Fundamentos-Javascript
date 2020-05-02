const readline = require('readline');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Matematica = require('./matematica');

terminal.question('Insira o primeiro valor \n', (valor1) => {
  terminal.question('Insira o segundo valor \n', (valor2) => {
    terminal.question('Insira a operacao \n', (tipoOperacao) => {
      const result = Matematica[tipoOperacao](Number(valor1), Number(valor2));
      console.log(result);

      terminal.close();
    });
  });
});
