const divDnotification = document.getElementById("divDnotification");
const titreDnotification = document.getElementById("titreDnotification");
const paragrapDnotification = document.getElementById("paragrapDnotification");













//==========================================mes fonction de la page de connexion

function notification() {
    divDnotification.classList.remove('d-none');
    titreDnotification.innerText = E-mail;
    paragrapDnotification.innerText = Mot-de-passe;
  
    setTimeout(() => {
      divDnotification.classList.add('d-none');
    }, 4000);
  
  }