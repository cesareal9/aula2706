// pedir para o usuario digitar o seu nome
process.stdout.write("Qual é a sua idade Cesar?  \n");

// ler o que o usuario digitou
process.stdin.once("data", function (data) {
const YEAR = 2024;

  // ler a idade
let idade = parseInt(data.toString().trim());
let ano = YEAR - idade;

  // exibir uma mensagem personalizada com as infos do usuario
process.stdout.write("Olá Cesar,voce nasceu em: " + ano);

  // encerrar o programa
process.exit();

});
