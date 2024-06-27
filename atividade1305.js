let anoAtual = 2024;
let idade = ""
let anoNasc
console.log(" Boa Noite(a),qual é a sua idade?");
process.stdin.once("data", function (data) {
  idade = parseInt(data.toString().trim());

  anoNasc = anoAtual - idade;
  console.log(`Vc nasceu em ${anoNasc}`);

  if (idade >= 18) {
    console.log("voce possui idade para carteira de motorista");
  } else {
    console.log("voce nao possui idade para a carteira de motorista");
  }

  process.exit();
});
