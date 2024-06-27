// Exemplo com var 
var x = 10;

console.log ("var:", x) ; // 10
console.log("var: ",x) ; // 20

// Exemplo com let 
let y = 10
console.log("let:", y); // 10

y = 20
console.log("let: ", y); // 20

// Exemplo com const
const z = 10
console.log("const: ", z); // 10

// Definindo uma variável para armazenas a entrada do usuário
let entradaUsuario = '' ;

// Executando o evento 'data' para receber dados de entrada de usuário
process.stdin.on('data', function (data) {
    // convertendo os dados de entrada (Buffer) para string
    entradaUsuario = data.toString();

    // Exibindo a entrada do usuário no console
    console.log('Você digitou:', entradaUsuario);

});

