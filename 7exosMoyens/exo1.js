var readline = require("readline-sync");
var tab = [3, 5, 10, 12, 1];
// const ordre = tab.sort(dansLordre);

let ordre = (a, b) => {
  return a - b;
};

menu();
var saisie = readline.questionInt("Quel est votre choix ? ");
while (saisie !== 3) {
  switch (saisie) {
    case 1:
      let chiffreSaisie = readline.questionInt(
        "Quel chiffre voulez-vous ajouter ? "
      );
      let ajouter = ajouterUnChiffre(tab, chiffreSaisie);
      console.log(ajouter);
      menu();
      break;
    case 2:
      console.log(ajouter.sort(ordre));
      break;
    case 3:
      console.log("A+");
      break;
  }
}

const dansLordre = (param) => {
  ajouterUnChiffre();
};

const ajouterUnChiffre = (array, chiffre) => {
  return array.push(chiffre);
};

function menu() {
  let txt = "1/ Ajouter un chiffre\n";
  txt += "2/ Afficher le tableau\n";
  txt += "3/ quitter";
  return console.log(txt);
}
