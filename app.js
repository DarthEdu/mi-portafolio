// 1. Datos del Portafolio
const portfolioData = {
    skills: [
        { name: "HTML5", icon: "fa-html5" },
        { name: "CSS3", icon: "fa-css3-alt" },
        { name: "JavaScript", icon: "fa-js" },
        { name: "Bootstrap", icon: "fa-bootstrap" }
    ],
    projects: [
        { 
            title: "Proyecto 1", 
            description: "Una aplicación web minimalista.", 
            repo: "https://github.com/tu-usuario/proyecto1" 
        }
    ],
    // Añadimos el array de certificados con el ID que me pasaste
    certificates: [
        { id: "1c6b4d7e-5c6f-4f18-a5a6-279008cbcd32" }
        // Si tienes más certificados, solo añade otro objeto aquí: { id: "OTRO_ID" }
    ]
};

// 2. Funciones de Renderizado (skills y proyectos se mantienen igual)
function renderSkills() { /* ... código anterior ... */ }
function renderProjects() { /* ... código anterior ... */ }

// 3. Renderizado de Certificados Credly
function renderCertificates() {
    const container = document.getElementById('certificados-container');
    container.innerHTML = ''; // Limpiamos el contenedor

    // Generamos los Divs para cada certificado
    portfolioData.certificates.forEach(cert => {
        container.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <div class="p-2 border border-secondary rounded bg-black shadow-sm">
                    <!-- Div de Credly usando el ID dinámico -->
                    <div data-iframe-width="150" 
                         data-iframe-height="270" 
                         data-share-badge-id="${cert.id}" 
                         data-share-badge-host="https://www.credly.com">
                    </div>
                </div>
            </div>
        `;
    });

    // Inyectamos el script de Credly dinámicamente DESPUÉS de crear los divs
    // para asegurar que el script encuentre los elementos y genere los iframes.
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    document.body.appendChild(script);
}

// 4. Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderCertificates(); // Llamamos a la nueva función
});
