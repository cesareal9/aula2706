// let codigo = 0;

// console.log('insira o código do produto (1-4)');
// process.stdin.on('data', function (data) {
//     codigo = Number(data.toString().trim());

//     switch (codigo) {
//         case 1:
//             console.log('O produto é um Alimento não-perecível');
//             break;

//         case 2:
//             console.log('O produto é um Alimento Perecível');
//             break;

//         case 3:
//             console.log('O produto é um item de Vestuário');
//             break;
//         case 4:
//             console.log('O produto é um item de Limpeza');
//             break;
//         default:
//             console.log('insira um código válido');
//             break;
//     }
// });

// let estacao = '';

// console.log('Insira uma estação do ano:');
// process.stdin.on('data', function (data) {
//     estacao = data.toString().trim().toLowerCase();
//     estacao = console.log(estacao);
//     switch (estacao) {
//         case 'verao':
//             console.log('os meses referentes ao Verão são: Dezembro, Janeiro e Fevereiro');
//             break;
//         case 'outono':
//             console.log('os meses referentes ao Outono são: Março, Abri e Maio');
//             break;
//         case 'inverno':
//             console.log('Os meses referentes ao Inverno são: Junho, Julho e Agosto');
//             break;
//         case 'primavera':
//             console.log('Os meses referentes a Primavera são: Setembro, Outubro e Novembro');
//             break;
//         default:
//             console.log('insira uma estação válida');
//             process.exit();
//     }
// });

// let mes = 0;

// console.log('insira o numero do mês que você quer consultar o numero de dias');
// process.stdin.on('data', function (data) {
//     mes = Number(data.toString().trim());
//     // if (mes < 1 || mes > 12) {
//     //     console.log('insira um mes valido');
//     // } //else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
//     //     mes = 3;
//     // } else if (mes == 2) {
//     //     mes = 2;
//     // } else {
//     //     mes = 1;
//     // }

//     switch (mes) {
//         case 2:
//             console.log('O mẽs possui 28 dias(29 em ano bissexto)');
//             break;
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log('o mês possui 31 dias');
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log('O mês possui 30 dias');
//             break;

//         default:
//             console.log('insira um mes valido');
//             break;
//     }
// });

// Só vale para numero random de base 10
// let Correto = 0;
// let Palpite = 0;

// Correto = (Math.random() * 10).toFixed(0); // pode ser substituido por Correto = Math.random() // Math.floor(Correto)

// console.log('adivinhe qual numero de 0 a 10 estou pensando');
// process.stdin.on('data', function (data) {
//     Palpite = Number(data.toString().trim());

//     if (Palpite == Correto) {
//         console.log('Parabéns, vc é o bichão memo hein doido');
//         process.exit();
//     } else {
//         console.log('ERRRROOOUUUUU!');
//         console.log('Te dou mais uma chance, bobão');
//     }
// });

//função (Math.random() * (maior numero do range - menor numero do range)) + menor numero do range // para gerar um numero aleatorio do range determinado
//pode ser arredondada pra numero inteiro por Math.round() ou .toFixed(0)

// let teste = 0;

// teste = Math.random() * (40 - 20) + 20;
// console.log(teste);
// teste = teste.toFixed(0);
// console.log(teste);
//

// selecionar um item random do array
// const nomes = ['joao', 'pedro', 'lucas', 'maria'];
// console.log(nomes.length);
// const IndiceArray = Math.round(Math.random() * nomes.length);
// console.log(IndiceArray);
// const randomElement = nomes[IndiceArray];
// console.log(randomElement);

// let r1 = 1;
// let r2 = 4;
// let r3 = 2;
// let GenArray = [1, 4, 5, 6, 2, 23, 2, 1];

// console.log(...GenArray);
// console.log(Math.max(...GenArray, r1, r2, r3)); // usa-se (...) para Espalhar os valores do array'

let Correto = 0;
let Palpite = 0;
let tentativas = 1;

Correto = Math.round(Math.random() * (30 - 0) + 0); // pode ser substituido por Correto = Math.random() // Math.floor(Correto)
// console.log(Correto);
console.log('adivinhe qual numero de 0 a 30 estou pensando');
process.stdin.on('data', function (data) {
    Palpite = Number(data.toString().trim());

    if (tentativas == 5) {
        console.log('Acabaram as tentativas, o numero era: ' + Correto + '\n Tente novamente');

        process.exit();
    } else {
        if (Palpite == Correto) {
            console.log('Parabéns, vc é o bichão memo hein doido');
            process.exit();
        } else {
            console.log('ERRRROOOUUUUU!\n');
            console.log('Você tem mais ' + (5 - tentativas) + ' chances');
            tentativas++;
        }
    }
});
