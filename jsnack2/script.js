/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

//ask first word
const firstWord = prompt('inserisci una parola');
//ask second word
const secondWord = prompt('inserisci un\'altra parola');


// declare an if statement with 3 conditions which log in the console different message sfor each case
if (firstWord.length > secondWord.length) {
    console.log(`la prima parola, "${firstWord}", è più lunga della seconda, "${secondWord}"`)
} else if (secondWord.length > firstWord.length) {
    console.log(`la seconda parola, "${secondWord}", è più lunga della prima, "${firstWord}"`)
} else {
    console.log(`Le due parole, "${firstWord}" e "${secondWord}", sono di egual lunghezza`);
}