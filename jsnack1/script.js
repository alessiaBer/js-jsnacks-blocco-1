/* Snack 1 Blocco 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const firstNumber = Number(prompt('inserisci il primo numero'));
const secondNumber = Number(prompt('inserisci il secondo numero'));

if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if(secondNumber > firstNumber) {
    console.log(secondNumber)
}