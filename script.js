/*
  DEMO DE EMPRESA DE SERVICIOS TÉCNICOS
  Antes de publicar para un negocio real:
  1. Completa los datos entre corchetes en index.html.
  2. Asigna el número real de WhatsApp abajo, con prefijo de país y solo dígitos.
  3. Ajusta servicios, horarios y ubicación a información verificada.
*/
const BUSINESS_WHATSAPP = ""; // Ejemplo de formato para Perú: "51987654321" (reemplazar, no usar este ejemplo)

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      mainNav.classList.remove("is-open");
    });
  });
}

const whatsappButton = document.querySelector("[data-whatsapp]");
const contactFeedback = document.querySelector("#contact-feedback");

if (whatsappButton) {
  whatsappButton.addEventListener("click", () => {
    const number = BUSINESS_WHATSAPP.replace(/\D/g, "");

    if (!number) {
      if (contactFeedback) {
        contactFeedback.textContent = "Demo: agrega el número comercial a BUSINESS_WHATSAPP en script.js para activar este botón.";
      }
      return;
    }

    const message = encodeURIComponent("Hola, quisiera consultar sobre sus servicios.");
    window.open(`https://wa.me/${number}?text=${message}`, "_blank", "noopener,noreferrer");
    if (contactFeedback) contactFeedback.textContent = "Se abrió WhatsApp en una pestaña nueva.";
  });
}
