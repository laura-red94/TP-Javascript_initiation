// Prix unitaires
const prix = {
    cravate: 10,
    ceinture: 20,
    casquette: 30,
    echarpe: 15,
    foulard: 25
};

// Met à jour le prix total des articles en direct
function updateTotals() {
    document.getElementById("prix_cravate").innerHTML =
        totalArticle("cravate") + " €";

    document.getElementById("prix_ceinture").innerHTML =
        totalArticle("ceinture") + " €";

    document.getElementById("prix_casquette").innerHTML =
        totalArticle("casquette") + " €";

    document.getElementById("prix_echarpe").innerHTML =
        totalArticle("echarpe") + " €";

    document.getElementById("prix_foulard").innerHTML =
        totalArticle("foulard") + " €";
}

// Calcul du total d'un article
function totalArticle(article) {
    let qte = Number(document.getElementById(article).value);
    return qte * prix[article];
}

// Quand on clique sur "Générer Facture"
function genererFacture() {
    let detail = "";

    let totalHT = 0;

    // Création dynamique de la facture
    for (let article in prix) {
        let qte = Number(document.getElementById(article).value);
        if (qte > 0) {
            let total = qte * prix[article];
            detail += `${qte} ${article}s : ${total} €<br>`;
            totalHT += total;
        }
    }

    document.getElementById("detail_facture").innerHTML = detail;

    // Calcul TVA = 20%
    let tva = totalHT * 0.20;
    let ttc = totalHT + tva;

    // Affichage
    document.getElementById("total_ht").innerHTML = "<b>Total HT :</b> " + totalHT + " €";
    document.getElementById("tva").innerHTML = "<b>TVA (20%) :</b> " + tva + " €";
    document.getElementById("total_ttc").innerHTML = "<b>Total TTC :</b> " + ttc + " €";
}