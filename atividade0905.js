let nome = "";
let idade = "";

console.log("qual é o seu nome?  ");

process.stdin.once("data", function (data) {
  nome = data.toString();

  console.log("Quantos anos você tem? ");

  process.stdin.once("data", function (data) {
    idade = data.toString().trim();

    console.log("Boa noite:", nome + "voce tem:", idade + " anos ");
    process.exit();
  });
});
