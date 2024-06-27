let listaHobby = [];

console.log("Insira um hobby ou digite 'sair' para encerrar:");
process.stdin.on("data", function (data) {
    let seuhobby = data.toString().toLowerCase().trim();

    if (seuhobby === "sair") {
        console.log("Os seus hobbies são:");

        listaHobby.forEach(function (seuhobby, index) {
            console.log(index + 1 + "." + seuhobby);
        });
        process.exit();
    } else {
        listaHobby.push(seuhobby);
        console.log("Insira um outro hobby ou digite 'sair' para encerrar:");
    }

});

