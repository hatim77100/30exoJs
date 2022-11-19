var readline = require("readline-sync");
// const ordre = tab.sort(dansLordre);
var tab = [3, 5, 10, 12, 1];

let ordre = (a, b) => {
  return a - b;
};

const dansLordre = (param) => {
  ajouterUnChiffre();
};

const ajouterUnChiffre = (array, chiffre) => {
  return array.push(chiffre);
};

menu();
var saisie = readline.questionInt("Quel est votre choix ? ");

  switch (saisie) {
    case 1:
      let chiffreSaisie = readline.questionInt(
        "Quel chiffre voulez-vous ajouter ? "
      );

      const ajouter = ajouterUnChiffre(tab, chiffreSaisie);
      menu();
      console.log(ajouter);
      saisie = readline.questionInt("Quel est votre choix ?");
      break;
    case 2:
      console.log(tab.sort(ordre));
      break;
    case 0:
      console.log("A+");
      break;
    default:
      console.log("Veuillez rechoisir !");
  }


function menu() {
  let txt = "1/ Ajouter un chiffre\n";
  txt += "2/ Afficher le tableau\n";
  txt += "0/ quitter";
  return console.log(txt);
}
