alert (`Boas vindas ao nosso site!`);
//let nome = `Lua`;
//let idade = 25;
let numeroDeVendas = 50
let saldoDisponivel = 1000
let mensagemDeErro = `"ERRO! Preencha todos os campos"`
alert (`${mensagemDeErro}`) 
let nome = prompt (`Qual é o seu nome?`)
let idade = prompt (`Qual é a sua idade?`)

if(idade >= 18 ) {
    alert (` ${nome}! você ja pode tirar Habilitação!`)
} else {
    alert (` ${nome} você ainda não pode tirar habilitação`)
}