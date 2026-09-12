const quant_alunos = 5;
const aluno1 = "Eduardo";
let nota_aluno1 = 7;
const aluno2 = "Rogerio";
let nota_aluno2 = 8.1;
const aluno3 = "Neymiro";
let nota_aluno3 = 6;
const aluno4 = "Miqueias";
let nota_aluno4 = 8.1;
const aluno5 = "Amadeus";
let nota_aluno5 = 3;

console.log("Notas:");
console.log(`Nota de ${aluno1} = ${nota_aluno1}`);
console.log(`Nota de ${aluno2} = ${nota_aluno2}`);
console.log(`Nota de ${aluno3} = ${nota_aluno3}`);
console.log(`Nota de ${aluno4} = ${nota_aluno4}`);
console.log(`Nota de ${aluno5} = ${nota_aluno5}`);

let media = (nota_aluno1+nota_aluno2+nota_aluno3+nota_aluno4+nota_aluno5) / quant_alunos;

let diferenca1 = (nota_aluno1 - media) ** 2;
let diferenca2 = (nota_aluno2 - media) ** 2;
let diferenca3 = (nota_aluno3 - media) ** 2;
let diferenca4 = (nota_aluno4 - media) ** 2;
let diferenca5 = (nota_aluno5 - media) ** 2;

let variancia = (diferenca1+diferenca2+diferenca3+diferenca4+diferenca5) / quant_alunos;
let DP = variancia ** 0.5;

console.log(`\nA media da turma = ${media} \nA variancia = ${variancia} \nO desvio padrão = ${DP}.`);