// exemplo 1

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question("digite o seu nome: ", (nome) => {
//     console.log(`Olá, ${nome}! `);
//     rl.close();
// });

// exemplo 2

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let resultado;

// rl.question("digite um numero: ", (num1) => {
//     rl.question("digite o segundo numero: ", (num2) => {
//         rl.question("digite o terceiro numero: ", (num3) => {
//             console.log(num1);
//             num1 = parseFloat(num1);
//             num2 = parseFloat(num2);
//             resultado = num1 + num2;
//             console.log("valor da operação: ", resultado);
//             rl.close();
//         });
//     });
// });

// exemplo 3 

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let num1;
// let num2;
// let num3;
// let contador = 0;

// console.log('digite um numero; ');

// rl.on('line', (resposta) => {
//     contador++;
//     if (contador === 1) {
//         num1 = parseFloat(resposta);
//         console.log('digite um numero: ');
//     } else if (contador === 2){
//         num2 = parseFloat(resposta);
//         console.log('digite um numero:');
//     } else if (contador === 3) {
//         num3 = parseFloat(resposta);
//         const resultado = num1 + num2 + num3;
//         console.log('valor da operação: ', resultado);
//         rl.close();
//     }
// });