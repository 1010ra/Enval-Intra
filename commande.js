const contenu = document.getElementById('contenu');
const hackcom =  document.getElementById('hack-com');
const com = document.getElementById('com');
const rech = document.getElementById('rech');
const tbodyTableau = document.getElementById('tbodyTableau');

function pourCommande() {
    // tbodyTableau.innerHTML = "";
    commande.forEach((element) => {
        tbodyTableau.innerHTML += `<tr>
        <td >${element.numero}</td>
        <td colspan="2">${element.laboratoire}</td>
        <td >${element.date}</td>
        <td >${element.statut}</td>
        <td colspan="2"><button type="button" class="btnt">VOIR</button></td>
    </tr>`
    });
}

pourCommande();
