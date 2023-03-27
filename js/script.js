/*
  JSnack 5
    Crea un array vuoto.

    Chiedi per 6 volte all’utente di inserire un numero,

    se è dispari inseriscilo nell’array
*/

const numbers =[]
console.log(numbers);

//per 6 volte
for (let i = 0; i < 6; i++) {

 //chiedere all'utente
  const inputUtente = parseInt(prompt('Inserisci il tuo numero'));
  
  if (inputUtente % 2) {

  }else {
    numbers.push(inputUtente);
  }

}

