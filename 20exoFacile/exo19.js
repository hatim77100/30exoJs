var readline = require("readline-sync");
var saisie = readline.questionInt("Factorielle de : "); 
let resultat = factorielle(saisie);

// for(let i = saisie; i > 1; i--) {
//     resultat *= i;
//     console.log(`Etape ${i} : ${resultat}`);
// }
console.log(`Le résultat de facorielle de ${saisie} est ${resultat}`);

/* ----------Fonction récursive ----------*/
// console.log(resultat);
function factorielle(n) {
    //  !5 = 5*!4
    //  !4 = 4*!3
    //  !3 = 3*2*1

    //  !1 = 1
    if(n > 1){
        return n * factorielle(n-1);
    } else {
        return 1;
    }
}

