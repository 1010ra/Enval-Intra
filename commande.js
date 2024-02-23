const contenu = document.getElementById('contenu');
const hackcom =  document.getElementById('hack-com');
const com = document.getElementById('com');
const rech = document.getElementById('rech');
const tbodyTableau = document.getElementById('tbodyTableau');



// envoyer dans  localStorage
localStorage.setItem('commande', JSON.stringify(commande));
// Recupérer dans le localStorage
const storedCommande = JSON.parse(localStorage.getItem('commande'));
console.log(storedCommande);


function pourCommande() {



}
pourCommande()