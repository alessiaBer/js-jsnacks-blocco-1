/* Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

/* 
let sum = 0;

for (let i = 0; i < 10; i++) {
    let requestedNumber = Number(prompt('inserisci un numero'));
    console.log(requestedNumber);
    
    sum += requested
} */

/*Rifare con WHILE LOOP:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let sum = 0;

let x = 0;

while (x < 10) {
    let requestedNumber = Number(prompt('inserisci un numero'));
    sum += requestedNumber;
    
    x++;
}

console.log(sum);

