alert(`Boas vindas ao jogo do número secreto`);
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //gera numero aleatorio
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`)
    
    if (chute == numeroSecreto) {
        break;
    
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

let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`
alert(`Isso ai! Você descobriu o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

/*if(tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto! ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Isso ai! Você descobriu o número secreto! ${numeroSecreto} com ${tentativas} tentativa!`);
}*/