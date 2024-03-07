// Función para enviar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes agregar el código para enviar el formulario (por ejemplo, con AJAX)
    alert('Formulario enviado correctamente');
});

// Animación de contorno RGB en el formulario de contacto
const formGroups = document.querySelectorAll('.form-group');
formGroups.forEach(formGroup => {
    formGroup.addEventListener('mouseenter', function() {
        this.style.animation = 'glow 1s infinite alternate';
    });
    formGroup.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

function toggleSubservices(serviceId) {
    var subservices = document.getElementById('subservices-' + serviceId);
    if (subservices.style.display === 'none' || !subservices.style.display) {
        subservices.style.display = 'block';
    } else {
        subservices.style.display = 'none';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let letters = document.querySelectorAll('.neon-rainbow span');
    letters.forEach((letter, index) => {
        letter.style.setProperty('--index', index);
    });
});

function openCatalog() {
    // Aquí puedes agregar el código para redirigir a la página de catálogo
    window.open("c:/Users/PC/Desktop/Nueva pagina/catalog.html", "_blank"); // Abre la página en una nueva pestaña
}
    // Opciones para la ventana emergente
    var windowFeatures = "width=800,height=600,resizable=yes,scrollbars=yes";

    // Abrir la nueva ventana
    window.open(url, "_blank", windowFeatures);



