const divModi = document.getElementById('divModi');
const passAncien = document.getElementById('passAncien');
const passNouveau = document.getElementById('passNouveau');
const inputConfirm = document.getElementById('inputConfirm');
const EnvoyerBtn = document.getElementById('EnvoyerBtn');
const modifMotPass = document.getElementById('modifMotPass');
const SuppCompte = document.getElementById('SuppCompte');
const inputNom = document.getElementById('inputNom');
const inputEmail = document.getElementById('inputEmail');
const inputBiographie = document.getElementById('inputBiographie');
const btnEnvoyer = document.getElementById('btnEnvoyer');

const ModifierPhoto = document.getElementById('ModifierPhoto');
const SupprimerPhoto = document.getElementById('SupprimerPhoto');

const divDnotification = document.getElementById('divDnotification');
const titreDnotification = document.getElementById('titreDnotification');
const paragrapDnotification = document.getElementById('paragrapDnotification');
const imagePicker = document.getElementById("image-picker");
const imagePreview = document.getElementById("image-preview");
const prof = document.getElementById('prof')




modifMotPass.addEventListener('click', function () {
    divModi.classList.toggle('d-none');
});

let utilisateurConnecter = JSON.parse(localStorage.getItem('utilisateurConnecter'));
let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs'));


 

let existeUtilisateure = utilisateurs.find(element => element.password === utilisateurConnecter.password);
let index = utilisateurs.indexOf(existeUtilisateure)



function affichageDparametre() {
    inputNom.value = utilisateurConnecter.nom
    inputEmail.value = utilisateurConnecter.email
    inputBiographie.value = utilisateurConnecter.bio
}
affichageDparametre()


function suppression() {

    let ok = confirm("voullez-vous supprimer votre compte");
    if (ok === true) {
        localStorage.removeItem('utilisateurConnecter');
        window.location.href = 'index.html';
    }



}

// ======================================== un écouteur d'evennement pour modifier les mots de passe 
EnvoyerBtn.addEventListener('click', function (e) {
    if (passNouveau.value === inputConfirm.value && passAncien.value === utilisateurConnecter.password) {
        e.preventDefault();
        existeUtilisateure.password = passNouveau.value;
        localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));
        
        divDnotification.querySelector('h2').textContent = 'Modification du mot passe'
        divDnotification.querySelector('p').textContent = 'Mot de passe modifier avec suicces'
        divDnotification.classList.remove('d-none');
       

        setTimeout(function () {
            divDnotification.classList.add('d-none');
            localStorage.removeItem('utilisateurConnecter');
            window.location.href = 'index.html';

        }, 2000)


    } else {
        e.preventDefault();

        divDnotification.querySelector('h2').textContent = 'Modification du mot passe'
        divDnotification.querySelector('p').textContent = 'Echec de la modiffication de mot de passe'
        divDnotification.classList.remove('d-none');
        setTimeout(function () {
            divDnotification.classList.add('d-none');

        }, 3000)
    }


})


//============================modification des inputs et biograhie

btnEnvoyer.addEventListener('click', function (e) {
    e.preventDefault();

    utilisateurConnecter.nom = inputNom.value;
    utilisateurConnecter.email = inputEmail.value;
    utilisateurConnecter.bio = inputBiographie.value;
    localStorage.setItem('utilisateurConnecter', JSON.stringify(utilisateurConnecter))

    existeUtilisateure.nom = inputNom.value;
    existeUtilisateure.email = inputEmail.value;
    existeUtilisateure.bio = inputBiographie.value;

    localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));


    divDnotification.querySelector('h2').textContent = 'données personnelles'
    divDnotification.querySelector('p').textContent = 'la mis à jour a été effectuée avec success'
    divDnotification.classList.remove('d-none');
    setTimeout(function () {
        divDnotification.classList.add('d-none');
        location.reload();

    }, 2000)


});


//===========================================fuction pour le cargement le image
imagePicker.setAttribute('style', 'display: none');

imagePicker.addEventListener("change", function (event) {
    readURL(event.target);
});

ModifierPhoto.addEventListener("click", function () {
    imagePicker.click();

});
function readURL(input) {
    let file = URL.createObjectURL(imagePicker.files[0])
    if (file) {
        const reader = new FileReader();
        localStorage.setItem('profileImage', JSON.stringify(file));
        reader.onload = function (e) {
            existeUtilisateure.photo = file;
            imagePreview.src = e.target.result;
            localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));
            prof.src = JSON.parse(localStorage.getItem('profileImage'));
    
        };

        reader.readAsDataURL(input.files[0]);

        
    }
    divDnotification.querySelector('h2').textContent = 'Modification de Avatar'
    divDnotification.querySelector('p').textContent = 'Votre photo a été ajoutée avec success'
    divDnotification.classList.remove('d-none');
    setTimeout(function () {
        divDnotification.classList.add('d-none');
        location.reload();

    }, 2000)
}


// Charger l'image depuis le localStorage lors de l'initialisation
imagePreview.src = JSON.parse(localStorage.getItem('profileImage')) || '/Image/avatar.jpg';
prof.src = JSON.parse(localStorage.getItem('profileImage')) || '/Image/avatar.jpg';

// Enregistrer l'identifiant de l'image dans le localStorage
localStorage.setItem("image", "image-preview");

// Fonction pour supprimer l'avatar
function suppressionAvatar() {
    let picture = confirm("Voulez-vous supprimer votre avatar?");
    if (picture) {
        // Supprimer l'image du localStorage
        localStorage.removeItem('profileImage');
        
        // Remettre une image par défaut ou effectuer toute autre action nécessaire
        imagePreview.src = '/Image/avatar.jpg';
        prof.src = '/Image/avatar.jpg';

        // Recharger la page (utiliser location.reload() au lieu de window.reload())
        location.reload();
    }
}



















