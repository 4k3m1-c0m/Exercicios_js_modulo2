// Explique a diferença entre var, let e const no contexto do escopo. Em seguida, crie um exemplo de código para demonstrar essa diferença.

// VAR - Escopo de função e ignora blocos (if, for) 
// LET -  Escopo de bloco e permite que o valor mude durante o programa
// CONST - Escopo de bloco e não permite que você altere o valor após a criação

function testarEscopo() {
    if (true) {
        var variavelVar = "Eu sou var (Escopo de Função)";
        let variavelLet = "Eu sou let (Escopo de Bloco)";
        
        console.log("Dentro do if:", variavelLet); // Funciona
    }

    console.log("Fora do if (var):", variavelVar); // Funciona! var ignorou o bloco if
    
    try {
        console.log("Fora do if (let):", variavelLet); 
    } catch (e) {
        console.log("Fora do if (let): Erro! variavelLet não está acessível aqui.");
    }
}

testarEscopo();