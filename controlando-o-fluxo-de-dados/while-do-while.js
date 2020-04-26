let termoParada = true;
let contador = 0;

while (termoParada) {
  termoParada = contador < 10;
  if (contador % 2 === 0) {
    console.log('Numero par: ', contador);
  }
  contador += 1;
}

do {
  console.log('Só uma vez: ', termoParada);
} while (termoParada);

while (termoParada) {
  console.log('Não vai executar ');
}

while (termoParada) {
  console.log(contador);

  if (contador++ < 3) continue;
  else termoParada = false;
}

while (termoParada) {
  console.log('Olá Mundo!');
  break;
}
