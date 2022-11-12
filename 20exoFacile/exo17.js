var readline = require("readline-sync");
var saisie = readline.questionInt("Saisir le chiffre 3 : ");

do{
    console.log("Vous n'avez pas saisi le bon chiffre ...");
    saisie = readline.questionInt("Saisir le chiffre 3 : ");
}while(saisie !== 3)
console.log(`Bravo ! vous avez saisi un ${saisie}`);