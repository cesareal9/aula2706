// Definindo uma variável para armazenas a entrada do usuário
let entradaUsuario = '' ;

// Executando o evento 'data' para receber dados de entrada de usuário
process.stdin.once('data', function (data) {
    // convertendo os dados de entrada (Buffer) para string
    entradaUsuario = data.toString();

    // Exibindo a entrada do usuário no console
    console.log('Você digitou:', entradaUsuario);
process.exit()
});