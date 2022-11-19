var tab = [2, 6, 10, 3, 8, 7, 20];

let resultat = 0;
for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
        resultat += tab[i]
        console.log(`itération : ${i} : ${resultat}`);
    } else {
        console.log(`itération : ${i} : non paire`);
    }
    
}
console.log(`le total est de : ${resultat}`);