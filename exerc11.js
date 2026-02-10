// O que será impresso no console ao executar o código abaixo? Explique o motivo.
//Primeiro: Imprime Carlos. A variável local tem prioridade e "esconde" a global 
//Segundo: Imprime Ana. A variável criada dentro da função é independente 
var nome = "Ana";
function mostrarNome() {
    var nome = "Carlos";
    console.log(nome); // ?
}
mostrarNome();
console.log(nome); // ?

// Agora, substitua `var` por `let` dentro da função e observe se há alguma mudança no comportamento.
// Não muda nada. O resultado continua sendo Carlos e Ana, pois dentro de funções, tanto var quanto let criam escopos locais 
