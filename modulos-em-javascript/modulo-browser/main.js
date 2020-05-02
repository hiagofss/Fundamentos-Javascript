window.onload = () => {
  console.log('Load');
  const buttonCalcular = document.getElementById('buttonCalcular');
  buttonCalcular.onclick = calculate;

  function obterValorInput(id) {
    const item = document.getElementById(id);
    return item.value;
  }

  function calculate() {
    const tipoOperacao = obterValorInput('tipoOperacao');
    const valor1 = obterValorInput('valor1');
    const valor2 = obterValorInput('valor2');
    console.log(tipoOperacao, valor1, valor2);
    const result = Matematica[tipoOperacao](Number(valor1), Number(valor2));

    document.getElementById(
      'resultado'
    ).innerText = `A operação de ${tipoOperacao} dos valores ${valor1} e ${valor2} é: ${result}`;
  }
};
