// Password = "DancingYeah"

// URL du site externe (modifiez selon vos besoins)
const externalSiteURL = "https://septieme7.github.io/Pilules-Matrix7/Pilule%20Orange%20Bleu%20Jaune%20Rouge%20Matrix/index.html";

// Compteur de tentatives échouées
let failedAttempts = 0;
const maxAttempts = 3;

function checkPassword() {
    const input = document.getElementById("passwordInput");
    const errorMessage = document.getElementById("errorMessage");
    
    if (input.value === correctPassword) {
        document.getElementById("loginForm").classList.add("hidden");
        document.getElementById("protectedContent").classList.remove("hidden");
        sessionStorage.setItem("authenticated", "true");
        // Réinitialiser le compteur en cas de succès
        failedAttempts = 0;
    } else {
        failedAttempts++;
        
        if (failedAttempts >= maxAttempts) {
            // Redirection vers DuckDuckGo après 3 tentatives
            window.location.href = "https://start.duckduckgo.com/";
        } else {
            errorMessage.textContent = `Mot de passe incorrect ! (${failedAttempts}/${maxAttempts})`;
            input.value = "";
        }
    }
}

// Fonction de déconnexion
function logout() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("protectedContent").classList.add("hidden");
    sessionStorage.removeItem("authenticated");
    document.getElementById("passwordInput").value = "";
    document.getElementById("errorMessage").textContent = "";
    // Réinitialiser le compteur lors de la déconnexion
    failedAttempts = 0;
}

// Fonction pour aller vers le site externe
function goToExternalSite() {
    window.location.href = externalSiteURL;}
    const correctPassword = "laplateforme.io";

// Fonction pour aller vers le SoundBoard
function goToCustomPage() {
    window.location.href = "https://septieme7.github.io/SoundBoard7/";
}

// Vérifier si déjà authentifié
window.onload = function() {
    if (sessionStorage.getItem("authenticated") === "true") {
        document.getElementById("loginForm").classList.add("hidden");
        document.getElementById("protectedContent").classList.remove("hidden");
    }
    
    // Permettre la validation avec Entrée
    document.getElementById("passwordInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            checkPassword();
        }
    });
};