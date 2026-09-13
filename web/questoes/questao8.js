let salario = parseFloat(prompt("Informe o salário do funcionário da empresa."));
let percentual = parseFloat(prompt("Informe o percentual de reajuste em decimal."));

let aumento = salario * percentual, novo_salario = salario + aumento;

alert(`O sálario atual = R$ ${salario}\nO aumento = R$ ${aumento}\nO novo salário = R$ ${novo_salario}`);