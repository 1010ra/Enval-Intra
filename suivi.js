const contenu = document.getElementById('contenu');
const hackcom =  document.getElementById('hack-com');
const com = document.getElementById('com');
const rech = document.getElementById('rech');
const tbodySuivi = document.getElementById('tbodySuivi');


function pourSuivi() {
   suivi.forEach((element) => {
    tbodySuivi.innerHTML += `<tr>
    <td >${element.lot}</td>
    <td colspan="2"  >${element.etat}</td>
    <td >${element.datePrevue}</td>
    <td >${element.rapport}</td>
    <td colspan="2"> <a href="#">
        <button class="btnt" type="button" id="con">VOIR</button>
    </a></td>
</tr>`
    });
}

pourSuivi();