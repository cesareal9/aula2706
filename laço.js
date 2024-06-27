let somaImpares = 0;
let somaPares = 0;
let totalPares = 0;
let totalImpares = 0;

for (let i = 0; i <= 999; i++) {
    if (i % 2 !== 0) {
        somaImpares += i;
        totalImpares++;
    } else {
        somaPares += i;
        totalPares++;
    }
}


  const mediaImpares = somaImpares / totalImpares;
  const mediaPares = somaPares / totalPares;

  console.log("Soma dos numeros impares:", somaImpares);
  console.log("Soma dos numeros pares:", somaPares);
  console.log("Total de numeros impares:", totalImpares);
  console.log("Total dos numeros pares:", totalPares);

  if (mediaImpares > mediaPares) {
    console.log("a media dos numeros impares é maior.");
  } else if (mediaPares > mediaImpares) {
    console.log("a media dos numeros impares e pares é igual.");
  

}




