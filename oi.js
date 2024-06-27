console.log("verifique se seu numero é impar ou par");



process.stdin.on("data", function(data){
    let numero = Number (data.toString().trim())

    let ehPar = numero % 2 == 0

if (ehPar){
    console.log("par")
} else {
    console.log("impar")
}
process.exit()
})