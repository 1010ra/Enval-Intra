const prof = document.getElementById('prof')
let utilisateurConnecter = JSON.parse(localStorage.getItem('utilisateurConnecter'));
function afficheNav() {
    prof.src = JSON.parse(localStorage.getItem('profileImage')) || '/Image/avatar.jpg';

}
afficheNav()

 // ========== CHARGEMENT DU TABLEAEU FACTURE =====================
 tbodySuivi.innerHTML = '';
 suivi.forEach((element, index) => {
    tbodySuivi.innerHTML += `<tr>
    <td >${element.lot}</td>
    <td colspan="2"  >${element.etat}</td>
    <td >${element.datePrevue}</td>
    <td >${element.rapport}</td>
    <td colspan="2"> <a href="#">
        <button data-id="${index}" class="btnt link-voir" type="button" id="con">VOIR</button>
    </a></td>
</tr>`;
 });

const compare = function (ids, asc) {
    return function (row1, row2) {
        const tdValue = function (row, ids) {
            return row.children[ids].textContent;
        }
        const tri = function (v1, v2) {
            if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)) {
                return v1 - v2;
            }
            else {
                return v1.toString().localeCompare(v2);
            }
            // return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
        };
        return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
    }
}

const allTh = document.querySelectorAll('th');
const allTr = tbodySuivi.querySelectorAll('tr');
// console.log(allTr, allTh);
for (let i = 0; i < allTh.length; i++) {
    const th = allTh[i];
    th.addEventListener('click', () => {
        let lignes = Array.from(allTr).sort(compare(Array.from(allTh).indexOf(th), this.asc = !this.asc)); // les paramètres de la methode compare() (c'est-à-dire les  a et b) representent les différents tr du tableau lignes;
        lignes.forEach(tr => tbodySuivi.appendChild(tr));
        console.log(true);
        const icon = th.querySelector("i");
        icon.classList.toggle('bi-sort-alpha-down-alt');
        icon.classList.toggle('bi-sort-alpha-down');

    })

}

// ===============FILTRAGE SUR LE BOUTTON RECHERCHE ============================

const searchInputFacture = document.querySelector('#searchInputFacture');
searchInputFacture.addEventListener('input', () => {
    const cle = searchInputFacture.value.toUpperCase();
    const tableFilter = suivi.filter(element => {
        const elementLabo = element.rapport.toUpperCase();
        return elementLabo.includes(cle);

    });
    // Affiche les résultats dans le tableau
    showTableFilter(tableFilter);
});

function showTableFilter(tableFilter) {
    tbodySuivi.innerHTML = '';
    if (tableFilter.length === 0) {
        tbodySuivi.innerHTML = '<tr><td colspan="4">Aucun résultat trouvé</td></tr>';
    } else {
        tableFilter.forEach((element,index) => {
            tbodySuivi.innerHTML += `<tr>
            <td >${element.lot}</td>
            <td colspan="2">${element.etat}</td>
            <td >${element.datePrevue}</td>
            <td >${element.rapport}</td>
            <td colspan="2"> <a href="#">
            <button data-id="${index}" class="btnt link-voir" type="button" id="con">VOIR</button>
            </a></td>
        </tr>`;
        });
    }
}
   // ===================================BOUTTON VOIR LE DETAIL =============================================    const lienVoir = document.querySelectorAll('.link-voir');
   const lienVoir = document.querySelectorAll('.link-voir');
   
   lienVoir.forEach(button => { 
        button.addEventListener('click', (e) => {
            console.log(e.target.dataset.id);
            // --------RECUPERATION DE L'OBJET A CHAQUE CLIC -----------------
            const object = suivi[e.target.dataset.id];
            console.log(object);

            if (object.rapport === 'Disponible') {
                localStorage.setItem('objet', JSON.stringify(object)); // ENVOIE DE L'OBJET DANS LE localStorage afin de le recuperer dans la page suividtail.html

               location.href = 'suiviDetail.html';  // redirection vers la page suividetail

            }
        })
    })

