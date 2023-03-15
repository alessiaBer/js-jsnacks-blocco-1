/* Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array */

const numbersArray = [];

for (let i = 0; i < 6; i++) {
    const askedNumber = Number(prompt('inserisci un numero'))

    if (askedNumber % 2 != 0) {
        numbersArray.push(askedNumber);
    }
}

console.log(numbersArray); 

let x = 0 
while (x < 6) {
    const askedNumberWhile = Number(prompt('inserisci un numero while'))

    if (askedNumberWhile % 2 != 0) {
        numbersArray.push(askedNumberWhile);
    }

    x++
}

console.log(numbersArray);