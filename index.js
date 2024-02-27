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

// récupérer dans localStorage
const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs'));
console.log(utilisateurs);


    let temp = 0;
    let reponse = '';

btnConnexion.addEventListener('click', () => {
    let pseudo = inputNom.value;
    console.log(pseudo);
    let inputPasword = inputPassword.value;
    console.log(inputPasword);

    

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
                divDnotification.setAttribute('style', 'display:block');
                setTimeout(function () {
                    divDnotification.setAttribute('style', 'display:none');
                }, 3000);
                temp++;

                console.log(temp);

                if (temp === 3) {
                    temp = 0;
                    texteConbinaison.textContent = 'Oups !!! votre compte est tamporairement bloqué!'
                    div2Notif.style.display = 'block';
                    setTimeout(function () {
                        div2Notif.style.display = 'none';
                        
                        reponse = prompt("Question secrète: quel est le nom de ton amie ?");
                    }, 2000);
                        // if (reponse === "rakiss") {
                        //     alert("vous pouvez vous connecter à dashboard");
                        //     window.location.href = 'dashboard.html';
                        // } else {
                        //     texteConbinaison.textContent = 'votre compte est definitivement  bloqué!'
                        //     div2Notif.style.display = 'block';
                        //     document.querySelector('.sub').style.display = 'none';
                        //     setTimeout(function () {
                        //         div2Notif.style.display = 'none';
                        //         document.querySelector('.sub').style.display = 'none';
                        //     }, 3000);

                        //     // Timer setup
                        //     document.querySelector('.petitDivheure').style.display = 'block';
                        //     const minutes = 5;
                        //     const comptage = document.querySelector('.comptage');

                        //     function miseAJourcomptage(tempsCompter) {
                        //         const heures = Math.floor(tempsCompter / 3600);
                        //         const minutes = Math.floor((tempsCompter % 3600) / 60);
                        //         const secondes = tempsCompter % 60;

                        //         comptage.textContent = `0${heures}:0${minutes}:${secondes}`;

                        //         if (tempsCompter <= 0) {
                        //             clearInterval(intervalId);
                        //             document.querySelector('.sub').style.display = 'block';
                        //             document.querySelector('.petitDivheure').style.display = 'none';
                        //         }
                        //     }

                        //     let tempsCompter = minutes * 60;
                        //     miseAJourcomptage(tempsCompter);

                        //     const intervalId = setInterval(() => {
                        //         tempsCompter--;
                        //         miseAJourcomptage(tempsCompter);
                        //     }, 1000);
                        // }
                    
                } else {
                    // div2Notif.style.display = 'block';
                    // setTimeout(function () {
                    //     div2Notif.style.display = 'none';
                    // }, 2000);
                }
            }
});




