/* Snack 1 Blocco 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

//chiedo il primo numero
const firstNumber = Number(prompt('inserisci il primo numero'));
//chiedo il secondo numero
const secondNumber = Number(prompt('inserisci il secondo numero'));

//aggiungo un if statement che controlla se il numero maggiore è il primo o il secondo e stampa un messaggio appropriato
if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if(secondNumber > firstNumber) {
    console.log(secondNumber)
}