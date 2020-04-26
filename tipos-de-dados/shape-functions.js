function minhaFuncao1(params) {
  return true;
}

const minhaFuncao2 = function (params) {
  return params;
};

const arrowFunction = (params) => {
  return params;
};

const arrowFunctionOneParam = (param) => param;

const objectFunction = {
  func: (param) => param,
};

objectFunction.func('test');

const objectFunction2 = {
  func(param) {
    return param;
  },
};

objectFunction2.func('test 123');
