let listaFrase = ""
let listaFrase2 =

console.log("insira uma frase para contar os caracteres!")
process.stdin.once("data" , function(data) {
    listaFrase2 = data.toString().trim();

    listaFrase = listaFrase2.replace(' ','');
    console.log('o tamanho da frase é: ' + listaFrase.length + ' caracteres');
    let divisor = listaFrase.length %2;
    if (divisor != 0){
        console.log("a sua frase tem um numero impar de caracteres!");
    } else {
        console.log('a sua frase tem um numero de caracteres par!');
    }
    process.exit();
});