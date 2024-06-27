// let Correto = 0;
// let Palpite = 0;
// let tentativas = 1;

// Correto = Math.round(Math.random() * (30 - 0) + 0); 
// console.log('insira um numero de 0 e veremos se está com sorte!');
// process.stdin.on('data', function (data) {
//     Palpite = Number(data.toString().trim());

//     if (tentativas == 5) {
//         console.log('Acabaram as tentativas, o numero era: ' + Correto + '\n Tente novamente');

//         process.exit();
//     } else {
//         if (Palpite == Correto) {
//             console.log('Parabéns, voce está com sorte!');
//             process.exit();
//         } else {
//             console.log('Voce errou! continue tentando!\n');
//             console.log('Você tem mais ' + (5 - tentativas) + ' chances');
//             tentativas++;
//         }
//     }
// });
    

// pode ser substituido por Correto = Math.random() // Math.floor(Correto)
// console.log(Correto);
