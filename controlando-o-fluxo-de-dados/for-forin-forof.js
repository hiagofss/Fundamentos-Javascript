const textoPar = 'PAR';
const textoImpar = 'IMPAR';

for (let index = 0; index < 10; index++) {
  const decisao = index % 2 === 0 ? textoPar : textoImpar;
  console.log(`O numero ${index} é ${decisao}`);
}

const listaHerois = [
  {
    id: parseInt(Math.random() * 10),
    nome: 'Joao',
    superPoder: 'Rapido',
  },
  {
    id: parseInt(Math.random() * 10),
    nome: 'Maria',
    superPoder: 'Forca',
  },
];

for (let index = 0; index < listaHerois.length; index++) {
  const item = listaHerois[index];
  console.log(item.nome);
}

for (const index in listaHerois) {
  const item = listaHerois[index];
  console.log(item.nome);
}

for (const item of listaHerois) {
  console.log(item.nome);
}

listaHerois.forEach((e) => {
  console.log(e.nome);
});

listaHerois.map((e) => {
  console.log(e.nome);
});
