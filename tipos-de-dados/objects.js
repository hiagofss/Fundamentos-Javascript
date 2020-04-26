const heroi = {
  nome: 'Flash',
  idade: 100,
  sexo: 'M',
};

console.log('Nome: ', heroi.nome);
console.log('Idade: ', heroi['idade']);
console.log('Idade: ', heroi.sexo);
console.log('Nao Existe: ', heroi.naoExiste);

heroi.id = 0001;

console.log(heroi);

// Retorna as chaves do objeto
console.log(Object.keys(heroi));

// Retorna os valores do objeto
console.log(Object.values(heroi));

const pessoa = {
  tamanho: '10 m',
};
// Adiciona valor no objeto
const novoObjt = Object.assign(heroi, pessoa);
console.log(novoObjt);

delete novoObjt.nome;
console.log(novoObjt);
