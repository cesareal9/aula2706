let listaNumeros = [1,2,15,25,50,19,22,100,110];
let numero = 0

console.log("Insira um numero para verificar se esta presente na lista");
process.stdin.once('data' , function(data) {
    numero = Number(data);
    if (listaNumeros.includes(numero) == true) {
        console.log("O seu numero está na lista");
    } else {
        console.log("O seu numero não esta na lista");
    }
process.exit();
});

