// =========================================
// MENÚ RESPONSIVO
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// =========================================
// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
// =========================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================================
// MODO OSCURO
// =========================================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        darkModeBtn.textContent = "☀️";

        localStorage.setItem("darkMode", "enabled");

    } else {

        darkModeBtn.textContent = "🌙";

        localStorage.setItem("darkMode", "disabled");

    }

});


// =========================================
// RECORDAR MODO OSCURO
// =========================================

const savedMode = localStorage.getItem("darkMode");

if (savedMode === "enabled") {

    document.body.classList.add("dark-mode");

    darkModeBtn.textContent = "☀️";

}


// =========================================
// CAMBIO DE IDIOMA
// =========================================

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "es";


languageBtn.addEventListener("click", () => {

    // Cambiar idioma
    currentLanguage = currentLanguage === "es" ? "en" : "es";


    // Buscar todos los elementos que tienen traducciones
    const elements = document.querySelectorAll(
        "[data-es][data-en]"
    );


    // Cambiar textos
    elements.forEach(element => {

        element.textContent =
            element.getAttribute(`data-${currentLanguage}`);

    });


    // Cambiar placeholders de los formularios
    const inputs = document.querySelectorAll(
        "[data-placeholder-es][data-placeholder-en]"
    );


    inputs.forEach(input => {

        input.placeholder =
            input.getAttribute(
                `data-placeholder-${currentLanguage}`
            );

    });


    // Cambiar botón
    if (currentLanguage === "en") {

        languageBtn.textContent = "ES";

        document.documentElement.lang = "en";

    } else {

        languageBtn.textContent = "EN";

        document.documentElement.lang = "es";

    }

});


// =========================================
// FORMULARIO DE CONTACTO
// =========================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    if (currentLanguage === "es") {

        alert(
            "¡Gracias por tu mensaje! El formulario está funcionando."
        );

    } else {

        alert(
            "Thank you for your message! The form is working."
        );

    }


    contactForm.reset();

});