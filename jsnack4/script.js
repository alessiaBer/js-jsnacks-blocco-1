/* Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const guestsList = [
    'Nick Carraway',
    'Daisy Buchanan',
    'Tom Buchanan',
    'Jordan Baker'
]

const guestName = prompt('What\'s your name?')
hasAccess = false;

for (let i = 0; i < guestsList.length; i++) {

    if (guestName === guestsList[i]) {
        console.log('You can participate');
    } else {
        console.log('You\'re not allowed to participate')
    }
}

let x = 0
while (x < guestsList.length) {
    if (guestName === guestsList[x]) {
        console.log('You can participate');
    } else {
        console.log('You\'re not allowed to participate')
    }

    x++
}