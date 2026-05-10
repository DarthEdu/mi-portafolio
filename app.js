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
                { name: "Express", icon: null },
                { name: "MongoDB", icon: null },
                { name: "JWT", icon: null },
                { name: "Firebase", icon: null }
            ]
        },
        {
            category: "Desarrollo Móvil",
            items: [
                { name: "Flutter", icon: null },
                { name: "Ionic", icon: null },
                { name: "Kotlin", icon: "fa-android" }
            ]
        },
        {
            category: "Otros",
            items: [
                { name: "Java", icon: "fa-java" },
                { name: "Python", icon: "fa-python" },
                { name: "C++", icon: null },
                { name: "Git", icon: "fa-github" },
                { name: "Supabase", icon: null }
            ]
        }
    ],
    projects: [
        { 
            title: "ESFOTalk", 
            description: "Aplicación móvil de red social para estudiantes (Tesis). Flutter + Appwrite.", 
            repo: "https://github.com/DarthEdu/ESFOTalk" 
        },
        { 
            title: "GarraDragon", 
            description: "Backend API REST para gestión de aportaciones. Node.js + MongoDB + JWT.", 
            repo: "https://github.com/DarthEdu/GarraDragon" 
        },
        { 
            title: "EcoGenerator", 
            description: "Sistema backend con autenticación JWT y API REST. Express + Node.js.", 
            repo: "https://github.com/DarthEdu/EcoGenerator" 
        },
        { 
            title: "Frontend-VETGR3", 
            description: "Frontend demo para sistema de veterinaria. React + CSS + HTML.", 
            repo: "https://github.com/DarthEdu/Frontend-VETGR3" 
        },
        { 
            title: "My-Pokedex", 
            description: "App móvil para consumir PokeAPI. Ionic + Firebase.", 
            repo: "https://github.com/DarthEdu/My-Pokedex" 
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
                            ${skill.icon ? `<i class="fab ${skill.icon} text-warning"></i>` : ''}
                            <span>${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.innerHTML += categoryHTML;
    });
}
function renderProjects() {
    const container = document.getElementById('proyectos-container');
    container.innerHTML = '';

    portfolioData.projects.forEach(project => {
        const projectHTML = `
            <div class="col-12 col-md-6">
                <div class="card bg-black border-secondary h-100">
                    <div class="card-body">
                        <h5 class="card-title text-info">${project.title}</h5>
                        <p class="card-text text-secondary">${project.description}</p>
                        <a href="${project.repo}" target="_blank" class="btn btn-outline-light btn-sm">
                            <i class="fab fa-github me-2"></i>Ver en GitHub
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += projectHTML;
    });
}

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

// 4. Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const toggleBtn = document.getElementById('theme-toggle');
    const navbar = document.getElementById('main-navbar');
    const footer = document.getElementById('contacto');
    
    if (theme === 'light') {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        toggleBtn.classList.replace('text-light', 'text-dark');
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
        footer.classList.remove('bg-black');
        footer.classList.add('bg-light', 'text-dark');
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        toggleBtn.classList.replace('text-dark', 'text-light');
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark');
        footer.classList.remove('bg-light', 'text-dark');
        footer.classList.add('bg-black');
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// 5. Inicializar
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSkills();
    renderProjects();
    renderCertificates();
});
