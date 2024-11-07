alert(`Boas vindas ao jogo do número secreto`);
let numeroSecreto = 29;
let chute = prompt(`Escolha um numero entre 1 e 30`);


if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto! (29)`);

} else {
    alert(` Você errou :( `)
}