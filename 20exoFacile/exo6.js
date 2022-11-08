var readline = require("readline-sync");
var saisie = parseInt(readline.question("Quel nombre voulez vous saisir ? "));

while(isNaN(saisie)) {
        console.log("Veuillez recommencer la saisie, vous devez saisir un nombre");
       saisie = parseInt(readline.question("Quel nombre voulez vous saisir ? ")); 
}

console.log(`Le chiffre saisi est : ${saisie}`);