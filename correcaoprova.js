// exercicio 1

// let nome = ""

// console.log('Boa Noite, Qual é o seu nome?');
// process.stdin.once("data", function(data){
//     nome = data.toString().trim();

//     console.log(`Seu nome é ${nome},\nTenha uma otima noite!`);
//     process.exit();

// });

// exercicio 2

// let numero = 0;

// console.log("Insira um numero, vamos verificar se ele é par ou impar!");
// process.stdin.once("data", function (data) {
//     numero = Number(data).toString().trim();
//     let result = numero % 2 === 0;
//     if (result) {
//         console.log("seu numero é par ");
//     } else {
//         console.log("seu numero é impar!");
//     }
//     process.exit();
// });

// exercicio 3

// let idade = 16;


// console.log("insira sua idade, te direi se voce pode votar");
// process.stdin.once("data", function (data) {
//     idade = Number(data.toString());

//     if (idade >= 16) {
//         console.log(`Olá! Voce tem ${idade} anos e pode votar`);
//     } else {
//         console.log(`Ola! voce tem ${idade} anos e não pode votar!`);
//     }
//     process.exit();
// });

// exercicio 4
// let idade = 18;


// console.log("insira sua idade, te direi se voce pode dirigir!");
// process.stdin.once("data", function (data) {
//     idade = Number(data.toString());

//     if (idade >= 18) {
//         console.log(`Olá! Voce tem ${idade} anos e pode dirigir!`);
//     } else {
//         console.log(`Ola! voce tem ${idade} anos e não pode dirigir!`);
//     }
//     process.exit();
// });

// exercicio 5

// let numeros =[1,2,3,4,5]
// let soma = 0;

// for (let i = 0; i < numeros.length; i++) {
    // console.log(numeros[i]);
//     if (numeros[i] % 2 != 0) {
//         soma += numeros[i]
//         console.log(numeros[i]);

//     }
// } 
//     console.log(soma);

// exercicio 6

// let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
// let media = 0;
// let soma = 0;
// let maiorNota = notas[0] // reb B
// let menorNota = notas[0] // ref B
// console.log(maiorNota);
// console.log(menorNota);

// parte A media
    //     for (let i = 0; i < notas.length; i++) {
    //         console.log(notas[i]);
    //         media = soma / notas.length;
            
    //     }
    // media = soma / notas.length;
    // console.log("media:", media);

    // parte B nota maxima e minima:


