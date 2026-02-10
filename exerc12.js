// Observe o código abaixo e tente prever o que será impresso no console. Depois, execute e verifique sua resposta.
//PREVISÃO:
//Dentro do bloco: 30
//Fora: 25

let idade = 25;
if (true) {
    let idade = 30;
    console.log("Dentro do bloco:", idade); 
}
console.log("Fora do bloco:", idade); 

// Agora, altere `let idade = 30;` para `var idade = 30;` dentro do bloco e veja o que acontece. Explique a diferença.
// Com let: O bloco protege o valor externo e tem duas variáveis que são isoladas
// Com var: O que acontece no bloco, vaza para fora (No caso, imprime 30 e depois 30)