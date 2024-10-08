// Seleccionamos la barra
const barra = document.querySelector('.barra');

// Variables para rastrear el estado de la animación
let animacionActiva = false;
let scrollAnterior = window.pageYOffset;

// Función para detectar la posición del elemento con respecto al viewport
function isEnteringFromBelow(element, offset) {
    const rect = element.getBoundingClientRect();
    return rect.bottom <= window.innerHeight - offset && rect.bottom > offset;
}

function isLeavingToBelow(element, offset) {
    const rect = element.getBoundingClientRect();
    return rect.bottom > window.innerHeight - offset && rect.bottom < window.innerHeight + offset;
}

// Función para manejar la animación de la barra
function handleScroll() {
    const contenedor = document.querySelector('.contenedor');
    const scrollActual = window.pageYOffset;
    
    if (isEnteringFromBelow(contenedor, 200) && scrollActual > scrollAnterior) {
        // El elemento entra desde abajo, activamos la animación
        if (!animacionActiva) {
            barra.classList.add('visible');
            barra.classList.remove('hidden');
            animacionActiva = true;
        }
    } else if (isLeavingToBelow(contenedor, 200) && scrollActual < scrollAnterior) {
        // El elemento sale hacia abajo, desactivamos la animación
        if (animacionActiva) {
            barra.classList.remove('visible');
            barra.classList.add('hidden');
            animacionActiva = false;
        }
    }
    
    // Actualizamos el estado del scroll para la próxima vez
    scrollAnterior = scrollActual;
}

// Escuchar el evento scroll para activar la animación
window.addEventListener('scroll', handleScroll);
