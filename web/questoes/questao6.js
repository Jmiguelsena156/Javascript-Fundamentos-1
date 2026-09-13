let distancia = Number(prompt("Informe a distancia da sua viagem (km)"));
let consumo = Number(prompt("Informe o consumo medio de combustivel do veículo (L / km)"));
let combustivel = Number(prompt("Informe o preço do Combustivel (R$ / L)"));

let gasto_combustivel = consumo * distancia;

console.log(`O gasto de combustivel vai ser ${gasto_combustivel} L.`);

let custo = gasto_combustivel * combustivel;

console.log(`O custo da viagem vai ser R$ ${custo}.`)