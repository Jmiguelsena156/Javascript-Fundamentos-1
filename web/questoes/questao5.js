let preco = Number(prompt("Informe o preço do produto"));
let quant = Number(prompt("Informe a quantidade de produtos"));
let percentual = Number(prompt("Informe o percentual de desconto para o preço em decimal"));

let subtotal = quant * preco;
console.log(`Subtotal: ${subtotal}`);

let desconto = percentual * subtotal;
console.log(`O desconto: ${desconto}`);

let total = subtotal - desconto;
console.log(`O valor a ser pago: ${total}`);