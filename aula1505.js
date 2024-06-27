let prova1;
let prova2;
let prova3;
let Notas = [];

console.log("insira a primeira nota do aluno\n")
process.stdin.once("data", function(data){
    prova1 = Number(data.toString().trim());

    console.log("insira a segunda nota do aluno\n");
    prova2 = Number(data.toString().trim());

    console.log("insira a terceira nota do aluno\n");
    prova3 = Number(data.toString().trim());

    Notas.push(prova1,prova2,prova3);

    console.log("\n As notas do aluno foram:\n" + Notas + "\n");

    let result = (Notas[0] + Notas[1] + Notas[2]) / 3;
    console.log("a media do aluno foi: " + result);

    if (Notas[0]>= Notas[1] && Notas[0] >= Notas[2]) {
        console.log("A maior nota é" + Notas[0]);
    }else if (Notas[1] >= Notas[0] && Notas[1] >= Notas[2]) {
        console.log("A maior nota é: " + Notas[1]);
    } else {
        console.log("A maior nota é " + Notas[2]);
    }

    if (Notas[0]>= Notas[1] && Notas[0] >= Notas[2]) {
        console.log("A menor nota é" + Notas[0]);
    }else if (Notas[1] >= Notas[0] && Notas[1] >= Notas[2]) {
        console.log("A menor nota é: " + Notas[1]);
    } else {
        console.log("A menor nota é " + Notas[2]);
    }



    process.exit();

    });
    
    