var c1 = 123;
var c2 = 20;
var c3 = 23;

function division(d) {
    if( d % 3 === 0) {
        console.log(`Le résultat de ${d} / 3 = ${d / 3}`);
    }else {
        console.log(`Le chiffre ${d} n'est pas divisible par 3`);
    }
}

division(c1);
division(c2);
division(c3);