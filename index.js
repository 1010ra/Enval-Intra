const divDnotification = document.getElementById("divDnotification");
const titreDnotification = document.getElementById('titreDnotification');
const paragrapDnotification = document.getElementById("paragrapDnotification");
const div2Notif = document.getElementById('div2Notif');
const texteConbinaison = document.getElementById('texteConbinaison');
const titreCompte = document.getElementById('titreCompte');

const btnConnexion = document.getElementById('btnConnexion');
const inputNom = document.getElementById('inputNom');
const inputPassword = document.getElementById('inputPassword');
const conn = document.getElementById('conn');
const comptage = document.getElementsByClassName('divComptage');

console.log(users);
// récupérer dans localStorage
if (!localStorage.getItem('utilisateurs')) {
    localStorage.setItem('utilisateurs', JSON.stringify(users));
}
const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs'));
console.log(utilisateurs);

let temp = 0;
let reponse = '';


btnConnexion.addEventListener('click', () => {
    let verifierPourTout = false;
    for (let i = 0; i < utilisateurs.length; i++) {
        if (inputNom.value.trim() === utilisateurs[i].pseudo && inputPassword.value.trim() === utilisateurs[i].password) {
            localStorage.setItem('utilisateurConnecter', JSON.stringify(utilisateurs[i]));
            window.location.href = 'dashboard.html';
            verifierPourTout = true;
            break;
        }
    }

    if (!verifierPourTout) {
        divDnotification.style.display = 'block';
        setTimeout(function () {
            divDnotification.style.display ='none';
        }, 1000);
        temp++;

        console.log(temp);


        if (temp === 3) {
            temp = 0;
            divDnotification.querySelector('h2').textContent = 'Compte bloqué'
            divDnotification.querySelector('p').textContent = 'Oups !!! votre compte est temporairement bloqué!'
            divDnotification.style.display = 'block';
            setTimeout(function () {
                divDnotification.style.display ='none';

                reponse = prompt("Question secrète: quel est le nom de ton amie ?");
                console.log(reponse);
                if (reponse === "rakiss") {
                    alert("vous pouvez vous connecter à dashboard");
                    window.location.href = 'dashboard.html';

                } else {
                    inputNom.disabled = true;
                    inputPassword.disabled = true;
                    btnConnexion.disabled = true;
                    document.querySelector('.petitDivheure').style.display = 'block';
                    const minutes = 5;
                    const comptage = document.querySelector('.comptage');

                    function miseAJourcomptage(tempsCompter) {
                        const heures = Math.floor(tempsCompter / 3600);
                        const minutes = Math.floor((tempsCompter % 3600) / 60);
                        const secondes = tempsCompter % 60;

                        comptage.textContent = `0${heures}:0${minutes}:${secondes}`;

                        if (tempsCompter <= 0) {
                            clearInterval(intervalId);
                            document.querySelector('.petitDivheure').style.display = 'none';
                        }
                    }

                    let tempsCompter = minutes * 60;
                    miseAJourcomptage(tempsCompter);

                    const intervalId = setInterval(() => {
                        tempsCompter--;
                        miseAJourcomptage(tempsCompter);
                    }, 1000);
                } 
                inputNom.disabled = false;
                inputPassword.disabled = false;
                btnConnexion.disabled = false;
            }, 2000);
            return;


        }


        
    }

    inputNom.value = "";
    inputPassword.value = "";
});







