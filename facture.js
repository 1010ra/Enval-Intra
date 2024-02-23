const contenu = document.getElementById('contenu');
const hackcom =  document.getElementById('hack-com');
const com = document.getElementById('com');
const rech = document.getElementById('rech');
const tbodyFacture = document.getElementById('tbodyFacture');


function pourFacture() {
    // tbodyTableau.innerHTML = "";
    facture.forEach((element) => {
        tbodyFacture.innerHTML += `<tr>
        <td >${element.numero}</td>
        <td colspan="3"  >${element.laboratoire}</td>
        <td >${element.date}</td>
        <td colspan="2"><button type="button" class="btnt">VOIR</button></td>
    </tr>`
    });
}

pourFacture();