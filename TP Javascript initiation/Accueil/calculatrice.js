const display = document.getElementById("display");
let current = "";

function updateDisplay() {
    display.textContent = current || "0";
}

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => handleInput(btn.textContent));
});

function handleInput(value) {
    if (value === "C") {
        current = "";
    }
    else if (value === "=") {
        try {
            current = current.replace(/x/g, "*");
            current = eval(current).toString();
        } catch {
            current = "Erreur";
        }
    }
    else {
        if (current === "0" && value !== ".") current = "";
        current += value;
    }

    updateDisplay();
}

// --- Gestion du clavier ---
document.addEventListener("keydown", e => {
    const key = e.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        handleInput(key === "*" ? "x" : key);
    }
    if (key === "Enter") handleInput("=");
    if (key === "Escape") handleInput("C");
    if (key === ".") handleInput(".");
});
