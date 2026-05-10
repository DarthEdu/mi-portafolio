// ═══════════════════════════════════════════════════════════════
// 1. DATOS DEL PORTAFOLIO
// ═══════════════════════════════════════════════════════════════
const portfolioData = {
    skills: [
        {
            category: "Frontend",
            items: [
                { name: "HTML5", icon: "fa-html5" },
                { name: "CSS3", icon: "fa-css3-alt" },
                { name: "JavaScript", icon: "fa-js" },
                { name: "React", icon: "fa-react" },
                { name: "TypeScript", icon: "fa-js" },
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

// ═══════════════════════════════════════════════════════════════
// 2. RENDERIZADO DE HABILIDADES (Skills)
// ═══════════════════════════════════════════════════════════════
function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';

    portfolioData.skills.forEach(skillCategory => {
        const categoryHTML = `
            <div class="col-12 skills__category">
                <h5 class="skills__category-title">${skillCategory.category}</h5>
                <div class="skills__list">
                    ${skillCategory.items.map(skill => `
                        <div class="skill-item">
                            ${skill.icon ? `<i class="skill-item__icon fab ${skill.icon}"></i>` : ''}
                            <span class="skill-item__name">${skill.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        container.innerHTML += categoryHTML;
    });
}

// ═══════════════════════════════════════════════════════════════
// 3. RENDERIZADO DE PROYECTOS (Projects)
// ═══════════════════════════════════════════════════════════════
function renderProjects() {
    const container = document.getElementById('proyectos-container');
    container.innerHTML = '';

    portfolioData.projects.forEach(project => {
        const projectHTML = `
            <article class="project-card">
                <div class="project-card__inner">
                    <h3 class="project-card__title">${project.title}</h3>
                    <p class="project-card__description">${project.description}</p>
                    <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="project-card__link">
                        <i class="fab fa-github" aria-hidden="true"></i>
                        <span>Ver en GitHub</span>
                    </a>
                </div>
            </article>
        `;
        container.innerHTML += projectHTML;
    });
}

// ═══════════════════════════════════════════════════════════════
// 4. RENDERIZADO DE CERTIFICADOS (Credly)
// ═══════════════════════════════════════════════════════════════
function renderCertificates() {
    const container = document.getElementById('certificados-container');
    container.innerHTML = '';

    portfolioData.certificates.forEach(cert => {
        const certHTML = `
            <div class="certificate">
                <div data-iframe-width="150"
                     data-iframe-height="270"
                     data-share-badge-id="${cert.id}"
                     data-share-badge-host="https://www.credly.com">
                </div>
            </div>
        `;
        container.innerHTML += certHTML;
    });

    // Inject Credly script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    document.body.appendChild(script);
}

// ═══════════════════════════════════════════════════════════════
// 5. THEME TOGGLE (Modo Claro/Oscuro)
// ═══════════════════════════════════════════════════════════════
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const toggleBtn = document.getElementById('theme-toggle');
    const header = document.getElementById('main-header');
    const footer = document.getElementById('contacto');

    if (theme === 'light') {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        header.classList.remove('navbar-dark');
        header.classList.add('navbar-light');
        footer.classList.remove('bg-black');
        footer.classList.add('bg-light');
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        header.classList.remove('navbar-light');
        header.classList.add('navbar-dark');
        footer.classList.remove('bg-light');
        footer.classList.add('bg-black');
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// ═══════════════════════════════════════════════════════════════
// 6. INICIALIZACIÓN
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSkills();
    renderProjects();
    renderCertificates();
});