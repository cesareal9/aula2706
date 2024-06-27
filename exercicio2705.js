let listaNumeros = [];
let Par = [];
let Impar = [];


console.log("Insira 10 numeros ");
process.stdin.on("data", function (data) {
    let numeros = Number(data.toString().trim());

    if (listaNumeros.length > 9) {

        console.log("aqui estao os numeros impressos por forEach " );
        listaNumeros.forEach(function (elemento) {
            console.log(elemento);
        });
        console.log('aqui estao os pares:');
        for (let contP = 0; Par.length > contP; contP++) {
            console.log(Par(contP));
        }
        console.log('e aqui os impares: ');
        for (let contI = 0; Impar.length > contI; contI++) {
            console.log(Impar[contI]);
        }
        console.log('\n temos ${Par.length} numeros Par ');
        console.loh('\n e temos ${Impar.length} numeros Impares ');

        process.exit();
    } else {
        if (numeros %2 == 0) {
            Par.push(numeros);
        } else {
            Impar.push(numeros);
        }
        listaNumeros.push(numeros);
        }
});
    