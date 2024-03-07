const prof = document.getElementById('prof')
let utilisateurConnecter = JSON.parse(localStorage.getItem('utilisateurConnecter'));
function afficheNav() {
    prof.src = JSON.parse(localStorage.getItem('profileImage')) || '/Image/avatar.jpg';

}
afficheNav();

const titreRapport = document.getElementById('titreRapport');

let objet = JSON.parse(localStorage.getItem('objet'));

titreRapport.textContent = objet.lot;