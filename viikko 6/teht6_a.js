const prompt = require('prompt-sync')();

var luku1 = parseFloat(prompt("anna luku 1: "));
var luku2 = parseFloat(prompt("anna luku 2: "));
kumpiSuurempi(luku1, luku2);

function kumpiSuurempi(num1, num2){
    if(num1 > num2){
        console.log("luku 1 on suurempi");
    }
    else if(num2 > num1){
        console.log("luku 2 on suurempi");
    }
    else {
        console.log("Luvut ovat yhtä suuret");
    }
}