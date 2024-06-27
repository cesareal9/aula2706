console.log("voce gosta de cafe?");
process.stdin.once("data", function (data) {
let respostaCafe = data.toString().trim().toLowerCase();
}

if (respostaCafe ){
console.log("voce é uma boa pessoa")
} else {

console.log("voce não é uma boa pessoa")

process.exit();
});
