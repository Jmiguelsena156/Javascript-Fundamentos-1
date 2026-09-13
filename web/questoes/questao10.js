let sabor = prompt("Informe o sabor da pizza");
let raio = Number(prompt("Informe o raio da pizza em cm"));
let preco = Number(prompt("Informe o preço por area da pizza em R$/cm²"));

const pi = 3.1415;

let area = pi * (raio ** 2);
let preco_total = area * preco;

alert(`A area da pizza é ${area.toFixed()} cm² \nO preço da pizza de ${sabor} é de R$ ${preco_total.toFixed(2)}.`);
console.log(`A area da pizza é ${area.toFixed()} m² \nO preço da pizza de ${sabor} é de R$ ${preco_total.toFixed(2)}.`);
