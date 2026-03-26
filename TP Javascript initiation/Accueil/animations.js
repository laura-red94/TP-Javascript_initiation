function afficherDateHeure() {
    const maintenant = new Date();

    // Format date
    const jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    const jour = jours[maintenant.getDay()];
    const jj = String(maintenant.getDate()).padStart(2, "0");
    const mm = String(maintenant.getMonth() + 1).padStart(2, "0");
    const aaaa = maintenant.getFullYear();

    document.getElementById("date").textContent = `${jour} ${jj}/${mm}/${aaaa}`;

    // Format heure
    const hh = String(maintenant.getHours()).padStart(2,"0");
    const min = String(maintenant.getMinutes()).padStart(2,"0");
    const ss = String(maintenant.getSeconds()).padStart(2,"0");

    document.getElementById("heure").textContent = `${hh}:${min}:${ss}`;
}

// Mise à jour toutes les secondes
setInterval(afficherDateHeure, 1000);
afficherDateHeure();
document.getElementById("ajouterBoule").addEventListener("click", () => {
    const boule = document.createElement("div");
    boule.classList.add("boule");
    document.getElementById("zoneBoules").appendChild(boule);
});


document.getElementById("ajouterBoule").addEventListener("click", () => {
    const boule = document.createElement("div");
    boule.classList.add("boule");

    // Disparition au clic
    boule.addEventListener("click", () => {
        boule.remove();
    });

    document.getElementById("zoneBoules").appendChild(boule);
});

let taille = 18; // taille initiale en px

document.getElementById("plus").addEventListener("click", () => {
    taille += 2;
    document.getElementById("texteModifiable").style.fontSize = taille + "px";
});

document.getElementById("moins").addEventListener("click", () => {
    taille -= 2;
    document.getElementById("texteModifiable").style.fontSize = taille + "px";
});

