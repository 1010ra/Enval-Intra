// ============================= CHARGEMENT DE L'AVATAR DE L'UTILISATEUR CONNECTE ==============================================

const prof = document.getElementById('prof')
let utilisateurConnecter = JSON.parse(localStorage.getItem('utilisateurConnecter'));
function afficheNav() {
    prof.src = JSON.parse(localStorage.getItem('profileImage')) || '/Image/avatar.jpg';

}
afficheNav()




// ========== CHARGEMENT DU TABLEAEU FACTURE =====================
tbodyFacture.innerHTML = '';
facture.forEach(element => {
    tbodyFacture.innerHTML += `<tr>
                 <td >${element.numero.toString().padStart(4, '0')}</td>
                 <td colspan="2">${element.laboratoire}</td>
                 <td >${element.date}</td>
                 <td colspan="2"><button type="button" class="btnt">VOIR</button></td>
                 </td>`;
});
//================= la fonction compare pour le tri =====================
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
const allTr = tbodyFacture.querySelectorAll('tr');
// console.log(allTr, allTh);
for (let i = 0; i < allTh.length; i++) {
    const th = allTh[i];
    th.addEventListener('click', () => {
        let lignes = Array.from(allTr).sort(compare(Array.from(allTh).indexOf(th), this.asc = !this.asc)); // les paramètres de la methode compare() (c'est-à-dire les  a et b) representent les différents tr du tableau lignes;
        lignes.forEach(tr => tbodyFacture.appendChild(tr));
        console.log(true);
      

    })
    const icon = th.querySelector("i");
    th.addEventListener('mouseenter', () => {
        const icon = th.querySelector("i");
        icon.classList.add('bi-sort-alpha-down-alt');
    });
    th.addEventListener('mouseleave', () => {
        const icon = th.querySelector("i");
        if (!th.classList.contains('asc') && !th.classList.contains('desc')) {
            icon.classList.remove('bi-sort-alpha-down-alt');
        }
    });

}

// ===============FILTRAGE SUR LE BOUTTON RECHERCHE ============================

const searchInputFacture = document.querySelector('#searchInputFacture');
searchInputFacture.addEventListener('input', () => {
    const cle = searchInputFacture.value.toUpperCase();
    const tableFilter = facture.filter(element => {
        const elementLabo = element.laboratoire.toUpperCase();
        return elementLabo.includes(cle);
    });

    // Affiche les résultats dans le tableau
    showTableFilter(tableFilter);
});

function showTableFilter(tableFilter) {
    tbodyFacture.innerHTML = '';
    if (tableFilter.length === 0) {
        tbodyFacture.innerHTML = '<tr><td colspan="4">Aucun résultat trouvé</td></tr>';
    } else {
        tableFilter.forEach(element => {
            tbodyFacture.innerHTML += `<tr>
            <td >${element.numero.toString().padStart(4, '0')}</td>
            <td colspan="2">${element.laboratoire}</td>
            <td >${element.date}</td>
            <td colspan="2"><button type="button" class="btnt">VOIR</button></td>
            </td>`;
        });
    }
}

// ============================= CHARGEMENT DE L'AVATAR DE L'UTILISATEUR CONNECTE ==============================================





