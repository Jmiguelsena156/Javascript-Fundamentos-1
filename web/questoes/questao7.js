let nome = prompt("Informe seu nome");

let idade = Number(prompt("Informe sua idade"));

let curso = prompt("Informe seu curso: ");

if (confirm("Você confirma com os dados informados?")) {
    console.log(`Seu nome é ${nome}`);
    console.log(`Sua idade é ${idade}`);
    console.log(`Seu curso é ${curso}`);
} else {
    console.log("Reinicie a página para preencher novamente");
}