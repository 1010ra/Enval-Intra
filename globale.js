  const divDnotification = document.getElementById("divDnotification");
  const titreDnotification = document.getElementById("titreDnotification");
  const paragrapDnotification = document.getElementById("paragrapDnotification");
  const btnConnexion = document.getElementById('btnConnexion');
  const inputNom = document.getElementById('inputNom'); 
  const inputPassword = document.getElementById('inputPassword');

//=======================recuperation de localStorage

  const tabUsers = JSON.parse(localStorage.getItem('utilisateurs'));

  console.log(tabUsers);

  //==========================================mes fonction de la page de connexion

  function notification() {
      divDnotification.classList.remove('d-none');
  
     

      setTimeout(() => {
          divDnotification.classList.add('d-none');
      }, 4000);
  }
  // Appelez la fonction pour afficher la notification
  notification();


  btnConnexion.addEventListener('click', () => {
    console.log('hello');

  })







