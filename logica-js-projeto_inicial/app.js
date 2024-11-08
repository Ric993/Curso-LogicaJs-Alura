alert(`Boas vindas ao jogo do número secreto`);
let numeroSecreto = 15;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e 30`)
    
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto! ${numeroSecreto} com ${tentativas} tentativas!`);
    
    } else {
        if (numeroSecreto > chute) {
            alert(`O numero é maior que o ${chute}`);
        } else {
            alert(`O numero é menor que o ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

