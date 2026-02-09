// public/script.js
// Comentarios: este fichero controla el toggle Apps/Repo y otras funciones generales.
// Asegúrate de que este script se carga con `defer` en tu layout principal.

///// Funciones de menú (navbar) /////
function seleccionar(link) {
  const opciones = document.querySelectorAll('#links a');
  opciones.forEach(op => op.className = "");
  link.className = "seleccionado";
  const nav = document.getElementById("nav");
  nav.className = "";
}

function responsiveMenu() {
  const nav = document.getElementById("nav");
  nav.className = nav.className === "" ? "responsive" : "";
}

///// Envío de email (EmailJS) /////
function sendEmail(event) {
  event.preventDefault();

  const nombre = document.querySelector("input[placeholder='Nombre Completo *']").value;
  const email = document.querySelector("input[placeholder='Dirección de Email']").value;
  const tema = document.querySelector("input[placeholder='Tema...']").value;
  const mensaje = document.querySelector("textarea[placeholder='Tu Mensaje...']").value;

  const params = {
    from_name: nombre,
    email_id: email,
    subject: tema,
    message: mensaje,
  };

  emailjs.send("service_wa2tu4d", "template_amn12gd", params)
    .then(() => {
      alert("Mensaje enviado con éxito!");
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      alert("Hubo un error al enviar el mensaje: " + (error.text || error));
    });
}

///// Toggle Apps / Repos y comportamiento de las cards /////
// document.addEventListener("DOMContentLoaded", () => {
//   const btnApps = document.getElementById("btn-apps");
//   const btnRepos = document.getElementById("btn-repos");
//   const cardInners = document.querySelectorAll(".card-inner");

//   if (!btnApps || !btnRepos) return;

//   // Estado inicial: modo Apps
//   document.body.classList.add("modo-apps");
//   document.body.classList.remove("modo-repos");
//   btnApps.classList.add("activo");
//   btnApps.setAttribute("aria-selected", "true");
//   btnRepos.setAttribute("aria-selected", "false");

//   // Click Apps: quitar flip y marcar modo-apps
//   btnApps.addEventListener("click", () => {
//     btnApps.classList.add("activo");
//     btnRepos.classList.remove("activo");
//     btnApps.setAttribute("aria-selected", "true");
//     btnRepos.setAttribute("aria-selected", "false");

//     // El flip (rotación) lo controla la clase .flipped en cada .card-inner
//     cardInners.forEach((c) => c.classList.remove("flipped"));

//     // Clases de modo para controlar overlays mediante CSS
//     document.body.classList.add("modo-apps");
//     document.body.classList.remove("modo-repos");
//   });

//   // Click Repos: aplicar flip a todas y marcar modo-repos
//   btnRepos.addEventListener("click", () => {
//     btnRepos.classList.add("activo");
//     btnApps.classList.remove("activo");
//     btnRepos.setAttribute("aria-selected", "true");
//     btnApps.setAttribute("aria-selected", "false");

//     cardInners.forEach((c) => c.classList.add("flipped"));

//     document.body.classList.add("modo-repos");
//     document.body.classList.remove("modo-apps");
//   });
// });
