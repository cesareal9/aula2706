numero = "";
let resto = "";

console.log("Insira um numero! te direi se ele é par ou impar!");
process.stdin.once("data", function (data) {
  numero = data.toString().trim();

  resto = numero % 2;

  if (resto == 0) {
    console.log("O seu numero é Par");
  } else {
    console.log("O seu numero é impar!");
  }

  process.exit();
});
