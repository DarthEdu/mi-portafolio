// 1. Datos del Portafolio
const portfolioData = {
    skills: [
        {
            category: "Frontend",
            items: [
                { name: "HTML5", icon: "fa-html5" },
                { name: "CSS3", icon: "fa-css3-alt" },
                { name: "JavaScript", icon: "fa-js" },
                { name: "React", icon: "fa-react" },
                { name: "TypeScript", icon: "fa-js" }, // Using JS icon - TS doesn't have dedicated FA icon
                { name: "Bootstrap", icon: "fa-bootstrap" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", icon: "fa-node" },
                { name: "Express", icon: "fa-server" },
                { name: "MongoDB", icon: "fa-database" },
                { name: "JWT", icon: "fa-shield-halved" },
                { name: "Firebase", icon: "fa-fire" }
            ]
        },
        {
            category: "Desarrollo Móvil",
            items: [
                { name: "Flutter", icon: "fa-mobile-screen" },
                { name: "Ionic", icon: "fa-mobile" },
                { name: "Kotlin", icon: "fa-android" }
            ]
        },
        {
            category: "Otros",
            items: [
                { name: "Java", icon: "fa-java" },
                { name: "Python", icon: "fa-python" },
                { name: "C++", icon: "fa-code" },
                { name: "Git", icon: "fa-github" },
                { name: "Supabase", icon: "fa-layer-group" }
            ]
        }
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
        { id: "44bb89a2-fc2d-46d4-b5a3-17f22c692b31" },
        { id: "5d9422a5-dbc1-4659-985b-4f4f2e9d3346" },
        { id: "21f32ee9-0fed-4d6f-ac45-f7ff0f8a23e0" },
        { id: "86bbf5a5-4976-47f4-b29c-9617410fb4bb" },
        { id: "ea214f91-4056-4374-9835-72dd9ce5830f" },
        { id: "7df1957f-1e04-45e0-afeb-bc5af7d85646" },
        { id: "9cb30c9c-f8f2-49ac-abb1-20878fc4d9e3" }
    ]
};

// 2. Funciones de Renderizado
function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';

    portfolioData.skills.forEach(skillCategory => {
        const categoryHTML = `
            <div class="col-12 mb-4">
                <h5 class="text-info mb-3 border-bottom border-secondary pb-2">${skillCategory.category}</h5>
                <div class="d-flex flex-wrap gap-3">
                    ${skillCategory.items.map(skill => `
                        <div class="bg-black border border-secondary rounded px-3 py-2 d-flex align-items-center gap-2">
                            <i class="fab ${skill.icon} text-warning"></i>
                            <span>${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.innerHTML += categoryHTML;
    });
}
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
