var readline = require("readline-sync");
var multiplication = readline.questionInt("Quelle table de multiplication voulez-vous afficher ? ");

for(let i = 1; i <= 10 ; i++) {
    let resultat = multiplication * i;
    console.log(`${multiplication} * ${i} = ${resultat}`);
}