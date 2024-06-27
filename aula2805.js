// let numero = 0;
// let antecessor = 0;
// let sucessor = 0;

// console.log("Insira um numero inteiro ");
// process.stdin.once("data", function(data){
//     numero = Number(data)

//     sucessor = numero + 1
//     antecessor = numero - 1

//     console.log(`O numero digitado foi ${numero}, o seu sucessor é ${sucessor}, e o seu antecessor é ${antecessor}`);

//     process.exit();

// });

// let notas = [];
// let media = 0;

// console.log("Insira as notas do aluno: ");
// process.stdin.on("data", function (data) {
//     notas.push(Number(data.toString().trim()));

//     if (notas.length >= 4) {
//         for (let i = 0; i < notas.length; i++) {
//             media = media + notas[i];
//         }
//         media = media / notas.length;

//         if (media >= 7) {

//             console.log("voce esta aprovado");
//         } else {
//             console.log("voce esta reprovado");
//         }

//         console.log(
//             `aqui estão as notas do aluno: ${notas} e a sua media foi ${media}`
//         );
//         process.exit();
//     } else {
//         console.log("insira mais uma nota!");
//     }
// });

// let valores = [];

// console.log("Insira 3 valores");
// process.stdin.on("data", function (data) {
//     valores.push(Number(data));

//     if (valores.length >= 3) {
//         let soma = valores[0] + valores[1];

//         if (soma > valores[2]) {
//             console.log(
//                 `a soma de A e B é ${soma}, e é maior do que o valor C`
//             );
//         } else if (soma < valores[2]) {
//             console.log(
//                 `a soma de A e B é ${soma}, e é menor do que o valor C`
//             );
//         } else {
//             console.log("a soma de A e B é igual ao valor C");
//         }
//         process.exit();
//     } else {
//         console.log("insira mais um numero");
//     }
// });

// let valores = [];
// let resultado = 0;
// console.log("Insira dois valores");
// process.stdin.on("data", function (data) {
//     valores.push(Number(data));

//     if (valores.length >= 2) {
//         if (valores[0] == valores[1]) {
//             resultado = valores[0] + valores[1];
//             console.log(
//                 `\n ${valores[0]} + ${valores[1]} é igual a ${resultado}`
//             );
//         } else {
//             resultado = valores[0] * valores[1];
//             console.log(
//                 `\n ${valores[0]} multiplicado por ${valores[1]} é igual a ${resultado}`
//             );
//         }
//         if (resultado % 2 == 0) {
//             console.log(`\n e o resultado é par`);
//         } else {
//             console.log(`\n e o resultado é impar`);
//         }

//         process.exit();
//     } else {
//         console.log("Insira mais um valor");
//     }
// });

// let peso = 0;
// let altura = 0;
// let IMC = 0;
// console.log("Insira a sua altura");
// process.stdin.once("data", function (data) {
//     altura = Number(data.toString().trim());

//     console.log("Insira o seu peso");
//     process.stdin.once("data", function (data) {
//         peso = Number(data.toString().trim());

//         IMC = peso / (altura * altura);
//         if (IMC <= 18.5) {
//             console.log("Voce esta abaixo do peso");
//         } else if (IMC > 18.5 && IMC <= 24.9) {
//             console.log("voce esta no peso ideal! Parabens!");
//         } else if (IMC > 24.9 && IMC <= 29.9) {
//             console.log("voce esta levemente acima do peso!");
//         } else if (IMC > 29.9 && IMC <= 34.9) {
//             console.log("voce tem obesidade grau I");
//         } else if (IMC > 34.9 && IMC <= 39.9) {
//             console.log("Voce tem obesidade grau II");
//         } else if (IMC > 39.9) {
//             console.log("voce tem obsesidade grau III");
//         } else {
//             console.log("voce não inseriu valores validos");
//         }
//         process.exit();
//     });
// });

// exerc06
// let Valor = 0;
// let FP = '';
// let parcelas = 0;

// console.log('insira o valor do produto:');
// process.stdin.once('data', function (data) {
//     Valor = Number(data);
//     console.log('Qual a forma de pagamento? (dinheiro,pix ou cartao)');
//     process.stdin.once('data', function (forma) {
//         FP = forma.toString().trim().toLowerCase();
//         if (FP === 'cartao') {
//             console.log('Quantas vezes gostaria de parcelar?');
//             process.stdin.once('data', function (parcelar) {
//                 parcelas = Number(parcelar);
//                 if (parcelas == 1) {
//                     Valor = Valor * 0.9;
//                     console.log(`O valor a pagar é $${Valor} reais`);
//                 } else if (parcelas >= 3) {
//                     Valor = Valor * 1.1;
//                     console.log(`O valor a pagar é $${Valor} reais e cada parcela será $${Valor / parcelas} reais`);
//                 } else {
//                     console.log(`O valor a pagar é $${Valor} reais`);
//                 }

//                 process.exit();
//             });
//         } else {
//             Valor = Valor * 0.85;
//             console.log(`O valor a pagar é $${Valor} reais`);
//             process.exit();
//         }
//     });
// });

// exerc07;

// let Candidato1 = 0;
// let Candidato2 = 0;
// let Candidato3 = 0;
// let Candidato4 = 0;
// let Branco = 0;
// let Nulo = 0;
// let Voto = [];
// console.log('Os candidatos para a eleição são\n1.Jose\n2.Marcos\n3.Rafael\n4.Marcelo\n5.Branco\n');
// console.log('Insira seu voto:');
// process.stdin.on('data', function (data) {
//     Voto.push(Number(data));
//     if (Voto.length >= 10) {
//         for (let i = 0; i < Voto.length; i++) {
//             if (Voto[i] == 1) {
//                 Candidato1++;
//             } else if (Voto[i] == 2) {
//                 Candidato2++;
//             } else if (Voto[i] == 3) {
//                 Candidato3++;
//             } else if (Voto[i] == 4) {
//                 Candidato4++;
//             } else if (Voto[i] == 5) {
//                 Branco++;
//             } else {
//                 Nulo++;
//             }
//         }
//         console.log(
//             `os votos foram\n1.Jose: ${Candidato1}\n2.Marcos ${Candidato2}\n3.Rafael: ${Candidato3}\n4.Marcelo: ${Candidato4}\n5.Brancos: ${Branco}\n6.Nulos: ${Nulo}`
//         );
//         process.exit();
//     } else {
//         console.log('insira mais um voto');
//     }
// });

// let Info = {
//     Nome: '',
//     Idade: 0,
//     Curso: '',
// };

// console.log('Insira seu nome');
// process.stdin.once('data', function (data) {
//     Info.Nome = data.toString().trim();

//     console.log('Insira sua idade:');
//     process.stdin.once('data', function (idade) {
//         Info.Idade = Number(idade);
//         console.log('insira o seu Curso/Periodo:');
//         process.stdin.once('data', function (curso) {
//             Info.Curso = curso.toString().trim();

//             console.log(`Seu nome é ${Info.Nome}, sua idade é ${Info.Idade} e seu curso é ${Info.Curso} `);
//             process.exit();
//         });
//     });
// });
