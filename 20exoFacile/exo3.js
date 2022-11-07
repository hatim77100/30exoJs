var readline = require("readline-sync");
var question = readline.questionInt("Puissance voulue ? ");

var puissance = Math.pow(2,question);

console.log(`2 à la puissance ${question} = ${puissance}`);