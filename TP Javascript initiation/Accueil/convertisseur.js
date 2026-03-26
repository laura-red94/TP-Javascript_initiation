// Taux de change (exemple, tu peux mettre à jour si besoin)
const rates = {
    EUR: 1,
    USD: 1.09,
    GBP: 0.85,
    JPY: 157.5
};

document.getElementById("convert").addEventListener("click", convert);
document.getElementById("swap").addEventListener("click", swapCurrencies);

function convert() {
    const amount = parseFloat(document.getElementById("amount1").value);
    const from = document.getElementById("currency1").value;
    const to = document.getElementById("currency2").value;

    if (isNaN(amount)) {
        alert("Veuillez entrer un montant valide.");
        return;
    }

    // Conversion : amount en EUR → conversion vers autre devise
    const result = (amount / rates[from]) * rates[to];

    document.getElementById("amount2").value = result.toFixed(2);
}

function swapCurrencies() {
    let currency1 = document.getElementById("currency1");
    let currency2 = document.getElementById("currency2");

    let temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;

    convert(); // Mettre à jour automatiquement
}
