// Efecto Typewriter para el subtítulo del Hero
const typewriter = (elemento, texto, velocidad = 100) => {
    let i = 0;
    elemento.innerHTML = "";
    const timer = setInterval(() => {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, velocidad);
}

document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.querySelector('.tagline');
    typewriter(titulo, "Técnico en Informática | Fullstack Developer en formación", 50);
});
// Función para animar elementos cuando entran en pantalla
const observarElementos = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Seleccionamos las tarjetas de portafolio y títulos de sección
    const elementosAAnimar = document.querySelectorAll('.portfolio-card, .section-title');
    elementosAAnimar.forEach(el => {
        el.classList.add('fade-in'); // Estado inicial oculto
        observer.observe(el);
    });
}

observarElementos();
const cursor = document.querySelector('#cursor-custom');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});