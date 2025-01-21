alert("Boas vindas ao jogo do numero secreto.");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1; 
// enquanto o chte não for igual ao numero secreto.
while (chute != numeroSecreto ) {
   chute = prompt(`Escolha o numero entre 1 e ${numeroMaximo}`);
   // se chute for igual ao numero secreto
    if (numeroSecreto == chute){
      break; 
    } else{
        if ( chute > numeroSecreto ) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);


// if(tentativas > 1){
//  alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }else{
//  alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }
//


