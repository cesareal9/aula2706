let resultado;

console.log("Por favor, digite uma frase!");

process.stdin.on("data", function (data) {
    frase = data.toString().trim(); // remove o \n no final
    let numeroCaracteres = frase.length;

    if (numeroCaracteres % 2 === 0) {
        resultado = "par";
    } else {
        resultado = "impar";
    }

    console.log("O numero de caracteres na frase é: " + numeroCaracteres);
    console.log("O numero de caracteres é " + resultado);

    process.exit();
});
