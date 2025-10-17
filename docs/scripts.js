// Función para mostrar la sección seleccionada
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}
const images = document.querySelectorAll('.fade-image');
let currentImageIndex = 0;

// Cambiar imagen cada 5 segundos
function changeImage() {
    images[currentImageIndex].classList.remove('active'); // Oculta la imagen actual
    currentImageIndex = (currentImageIndex + 1) % images.length; // Incrementa el índice
    images[currentImageIndex].classList.add('active'); // Muestra la siguiente imagen
}

// Ejecutar cambio cada 5 segundos
setInterval(changeImage, 5000);

// Detectar elementos en el viewport
const aboutItems = document.querySelectorAll('.about-item');

// Función para verificar si el elemento está en el viewport
function checkVisibility() {
    aboutItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
            item.classList.add('visible'); // Aparece
        } else {
            item.classList.remove('visible'); // Desaparece
        }
    });
}

// Detectar el scroll y llamar a la función
window.addEventListener('scroll', checkVisibility);

// Ejecutar al cargar la página para verificar elementos visibles
checkVisibility();

// Detectar elementos en el viewport
const serviceItems = document.querySelectorAll('.service-item');

// Función para verificar si el elemento está en el viewport
function checkServiceVisibility() {
    serviceItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
            item.classList.add('visible'); // Aparece
        } else {
            item.classList.remove('visible'); // Desaparece
        }
    });
}

// Detectar el scroll y llamar a la función
window.addEventListener('scroll', checkServiceVisibility);

// Ejecutar al cargar la página para verificar elementos visibles
checkServiceVisibility();
// Detectar los logotipos en el viewport
const clientItems = document.querySelectorAll('.client-item');

// Función para verificar si el elemento está en el viewport
function checkClientVisibility() {
    clientItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
            item.classList.add('visible'); // Aparece
        } else {
            item.classList.remove('visible'); // Desaparece
        }
    });
}

// Detectar el scroll y llamar a la función
window.addEventListener('scroll', checkClientVisibility);

// Ejecutar al cargar la página para verificar elementos visibles
checkClientVisibility();
