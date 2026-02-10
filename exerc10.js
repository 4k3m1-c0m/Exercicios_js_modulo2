// Crie uma variável global chamada mensagem e outra variável local dentro de uma função chamada exibirMensagem(). Tente acessar ambas dentro e fora da função. O que acontece?
let mensagemGlobal = "Eu sou Global"; // Variável Global

function exibirMensagem() {
    let mensagemLocal = "Eu sou Local"; // Variável Local
    
    console.log("Dentro da função:");
    console.log(mensagemGlobal); // Acessando a Global
    console.log(mensagemLocal);  // Acessando a Local
}

exibirMensagem();

console.log("Fora da função:");
console.log(mensagemGlobal); 
console.log(mensagemLocal);

//Dentro da função: Ambas são exibidas com sucesso ("Eu sou Global" e "Eu sou Local").
//Fora da função: A global é exibida ("Eu sou Global"), mas o acesso local dá erro
