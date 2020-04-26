const redline = require('readline');
const terminal = redline.createInterface({
  // Defini o modo de entrada via terminal.
  input: process.stdin,
  // Define o modo de saida para o terminal
  output: process.stdout,
});

const textoMenu = `
Olá, seja bem vinso ao sistema de media
Digite 1 para acessar o menu Inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para Sair
`;

// const opcao = 10;

// switch (opcao) {
//   case 1:
//     console.log('Opção 1');
//     break;

//   case 2:
//     console.log('Opção 2');
//     break;

//   case 3:
//     console.log('Opção 3');
//     break;

//   default:
//     console.log('Opção Invalida');
//     break;
// }

// terminal.question('Qual é o seu nome?\n', (value) => {
//   console.log('Seu nome é: ', value);
//   terminal.close();
// });

// const questoes = {
//   menuInicial: {
//     texto: textoMenu,
//     fn: menuInicial,
//   },
//   opcao1: {
//     texto: 'Submenu! Pressione ENTER para selecionar mais opções',
//     fn: opcao1,
//   },
// };

// function opcao1(value) {
//   console.log('Não tem mais opcoes!');
//   terminal.close();
// }

// function menuInicial(value) {
//   const opcao = Number(value);
//   if (isNaN(opcao)) {
//     throw new Error('Não é um numero: ', value);
//   }

//   switch (opcao) {
//     case 1:
//       console.log('Menu Inicial');
//       break;
//     case 2:
//       console.log('Menu Heroi');
//       terminal.question(questoes.opcao1.texto, questoes.opcao1.fn);
//       break;
//     case 3:
//       console.log('Menu Guerreira');
//       break;
//     default:
//       console.log('Opção invalida');
//       terminal.close();
//       break;
//   }
// }

// terminal.question(questoes.menuInicial.texto, questoes.menuInicial.fn);

// switch (true) {
//   case 1 < 2:
//     console.log('1 < 2');

//   case 1 === 1:
//     console.log('1 === 1');

//   default:
//     console.log('pode ter mais de uma opção');
// }

// switch (true) {
//   case 1 > 2:
//     console.log('1 > 2');

//     break;

//   case 1 === 1:
//     console.log('1 === 1');

//     break;

//   default:
//     console.log('nenhum deles!');

//     break;
// }

// switch (0) {
//   case 0:
//     console.log('Hello World');

//   case 1:
//     console.log('Segunda Opção');
// }

switch (0) {
  default:
    console.log('Funciona sem case!');
}
