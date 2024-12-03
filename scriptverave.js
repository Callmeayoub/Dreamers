// Restrict Access to Source Code
(function () {
    const accessCode = "001100";
    const userCode = prompt("Entrez le code d'accès pour voir la source :");

    if (userCode !== accessCode) {
        alert("Accès refusé. Vous ne pouvez pas voir le contenu de cette page.");
        document.body.innerHTML = "<h1 style='color: red; text-align: center;'>Accès Refusé 🚫</h1>";
    }
})();

// Allow Inspecting Page (Right-click and F12) only with code
(function () {
    const inspectCode = "13579";
    let isAllowedToInspect = false;
    let codeEntered = false; // To check if the user has already entered the code

    // Prevent right-click context menu
    document.addEventListener("contextmenu", function (event) {
        if (!isAllowedToInspect && !codeEntered) {
            event.preventDefault();
            const userInput = prompt("Entrez le code pour activer l'inspection de la page:");
            if (userInput === inspectCode) {
                isAllowedToInspect = true;
                codeEntered = true;
                alert("Vous pouvez maintenant inspecter la page.");
            } else {
                alert("Code incorrect. Inspection désactivée.");
            }
        }
    });

    // Prevent F12 and other inspect keyboard shortcuts
    document.addEventListener("keydown", function (event) {
        if ((event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) && !isAllowedToInspect && !codeEntered) {
            event.preventDefault();
            const userInput = prompt("Entrez le code pour activer l'inspection de la page:");
            if (userInput === inspectCode) {
                isAllowedToInspect = true;
                codeEntered = true;
                alert("Vous pouvez maintenant inspecter la page.");
            } else {
                alert("Code incorrect. Inspection désactivée.");
            }
        }
    });

})();

// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animate Section Appearance on Scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.6s ease-in-out";
    observer.observe(section);
});
