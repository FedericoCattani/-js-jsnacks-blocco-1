/*
  JSnack 5
    Crea un array vuoto.

    Chiedi per 6 volte all’utente di inserire un numero,

    se è dispari inseriscilo nell’array
*/

/*const numbers =[]
console.log(numbers);

//per 6 volte
for (let i = 0; i < 6; i++) {

 //chiedere all'utente
  const inputUtente = parseInt(prompt('Inserisci il tuo numero'));
  
  if (inputUtente % 2) {

  }else {
    numbers.push(inputUtente);
  }

}*/




/*
 JSnack 6:
    - Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/


//data

/*let y = '';
const n = parseInt(prompt('Inserisci un numero'));
let output = document.getElementById('cubo');

//per ogni input utente manda in output il cubo di quel numero
for (let i = 0; i < n; i++) {

  y = n ** 3;

  output.innerHTML = `
  ${y}
  `
}*/



/*
  
  JSnack 7:
    Stampa le potenze di 2 fino a 1000.
      questo snack cela un trabocchetto:  1000 non è una potenza di 2
      perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
      perché altrimenti il controllo viene fatto dopo e si sfora
 */





for (let n = 0; n < 11; n++) {
 
  let i = 2 ** n;
  console.log(i);
}

    

    






