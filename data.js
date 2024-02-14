const facture = [
    {
        id: 1,
        numero: 1,
        laboratoire: "Enval",
        date: "10/03/2023",
    },
    {
        id: 2,
        numero:2,
        laboratoire: "Biochimie",
        date: "10/03/2023",
    },
    {
        id: 3,
        numero: 3,
        laboratoire: "Biologie",
        date: "11/03/2023",
    },
    {
        id: 4,
        numero: 4,
        laboratoire: "Biologie",
        date: "12/03/2023",
    },
    {
        id: 5,
        numero: 5,
        laboratoire: "Enval",
        date: "12/03/2023",
    },
    {
        id: 6,
        numero: 6,
        laboratoire: "Biochimie",
        date: "13/03/2023",
    },
    {
        id: 7,
        numero: 7,
        laboratoire: "Enval",
        date: "13/03/2023",
    },
    {
        id: 8,
        numero: 8,
        laboratoire: "Géologie",
        date: "13/03/2023",
    },
    {
        id: 9,
        numero: 9,
        laboratoire: "Enval",
        date: "13/03/2023",
    },
]
const commande = [
    {
        id: 10,
        numero: 1,
        laboratoire: "Enval",
        date: "10/03/2023",
        statut: "En cours",
    },
    {
        id: 11,
        numero: 2,
        laboratoire: "codeloccol",
        date: "10/03/2023",
        statut: "En cours",
    },
    {
        id: 12,
        numero: 3,
        laboratoire: "ANSI",
        date: "12/03/2023",
        statut: "Terminée",
    },
    {
        id: 13,
        numero: 4,
        laboratoire: "CIPMEN",
        date: "12/03/2023",
        statut: "En cours",
    },
    {
        id: 14,
        numero: 5,
        laboratoire: "ADU",
        date: "13/03/2023",
        statut: "Terminée",
    },
    {
        id: 15,
        numero: 6,
        laboratoire: "codeloccol",
        date: "14/03/2023",
        statut: "En cours",
    },
    {
        id: 16,
        numero: 7,
        laboratoire: "Enval",
        date: "14/03/2023",
        statut: "En cours",
    },
    {
        id: 17,
        numero: 8,
        laboratoire: "ANSI",
        date: "16/03/2023",
        statut: "En cours",
    },
    {
        id: 18,
        numero: 9,
        laboratoire: "ADU",
        date: "18/03/2023",
        statut: "Terminée",
    },
]
const suivi = [
    {
        id: 19,
        lot:"TE202303001",
        etat:"Réçu",
        datePrevue: "12/03/2023",
        rapport:"Disponible",
    },
    {
        id:20,
        lot:"E202302023",
        etat:"Non Réçu",
        datePrevue: "12/03/2023",
        rapport:"Non Disponible",
    },
    {
        id:21,
        lot:"TE20230190",
        etat:"Réçu",
        datePrevue: "14/03/2023",
        rapport:"Non Disponible",
    },
    {
        id:22,
        lot:"Carbonate",
        etat:"Réçu",
        datePrevue: "14/03/2023",
        rapport:"Disponible",
    },
    {
        id:23,
        lot:"chlourire",
        etat:"Non Réçu",
        datePrevue: "15/03/2023",
        rapport:"Non Disponible",
    },
    {
        id:24,
        lot:"CO2 libre",
        etat:"Réçu",
        datePrevue: "15/03/2023",
        rapport:"Disponible",
    },
    {
        id:25,
        lot:"conductivité electrique",
        etat:"Non Réçu",
        datePrevue: "15/03/2023",
        rapport:"Non Disponible",
    },
    {
        id:26,
        lot:"ph/Temperature",
        etat:"Réçu",
        datePrevue: "16/03/2023",
        rapport:"Disponible",
    },
    {
        id:27,
        lot:"couleur Brute",
        etat:"Réçu",
        datePrevue: "17/03/2023",
        rapport:"Non Disponible",
    },
    {
        id:28,
        lot:"Cyanure libre",
        etat:"Réçu",
        datePrevue: "20/03/2023",
        rapport:"Disponible",
    },
]


//==============================les utilisateurs 

let user1 = {
    id: 1,
    pseudo: "admin",
    nom:"essai test",
    password:"1234",
    email:"essai@gmail.com",
    bio:"je suis le test",
    photo: "Image/avatar.jpg"
}
let user2 = {
    id: 2,
    pseudo: "chef",
    nom:"chef de projet",
    password:"8888",
    email:"chef@gmail.com",
    bio:"je suis le chef",
    photo: "Image/avatar.jpg"
}

const tabUtilisateurs = [user1, user2]

localStorage.setItem('utilisateurs', JSON.stringify(tabUtilisateurs));


