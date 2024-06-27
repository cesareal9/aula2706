let listaNumero = "";

console.log("insira 10 numeros entre 0 a 100, separado por virgula");
process.stdin.once("data", function (data) {
    listaNumero = data.toString().toLowerCase().trim();
    let valorArray = listaNumero.split(",").map(Number);

    let intervalo0 = 0;
    let intervalo1 = 0;
    let intervalo2 = 0;
    let intervalo3 = 0;

    for (let index = 0; index < listaNumero.length;index++) {
        if (valorArray[index] >= 0 && valorArray[index] < 25) {
            intervalo0++;
        } else if (valorArray[index] > 26 && valorArray[index] <= 50) {
            intervalo1++;
        } else if (valorArray[index] > 51 && valorArray[index] <= 75) {
            intervalo2++;
        } else if (valorArray[index] > 76 && valorArray[index] <= 100) {
            intervalo3++;
        }
        

    }
    console.log(" existem " + intervalo0 + " numeros entre 0 e 25 " + intervalo1  +  " numeros entre 26 e 50 " + intervalo2 + " numeros entre 51 e 75 " + intervalo3 + " numeros entre 76 e 100 ");
    process.exit();
});

