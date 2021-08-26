
const listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"] ;


    console.log(listaCognomi);

let utenteCognome =  prompt("scrivi il congome");

    console.log(utenteCognome);

listaCognomi.push(utenteCognome.charAt(0).toUpperCase() + utenteCognome.slice(1));  // non ho capito bene

listaCognomi.sort();

    console.log(listaCognomi);


   let index = listaCognomi.indexOf(utenteCognome);

   console.log(index);


