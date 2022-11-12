function verifNombreCaractere(string) {
    if(string.length <= 8) {
        console.log(`Le mot contient ${string.length} caracteres`);
    }else {
        console.log(`Le mot fait plus de 8 caracteres`);
    }
}

verifNombreCaractere("iufvyutdgvbuyfbujgno_u");