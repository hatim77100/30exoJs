var readline = require("readline-sync");
var personnage = {};
personnage.nom = readline.question("Quel est le nom ? ");
personnage.age = readline.questionInt("Quel age ? ");



console.log(personnage);
