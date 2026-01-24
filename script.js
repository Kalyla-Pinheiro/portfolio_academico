// ============================================
// ALTERNÂNCIA DE TEMA (CLARO/ESCURO)
// ============================================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Carregar tema salvo
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Alternar tema
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// ============================================
// ALTERNÂNCIA DE IDIOMA (PT/EN)
// ============================================

const langToggle = document.getElementById('lang-toggle');
const langText = langToggle.querySelector('.lang-text');

// Carregar idioma salvo
const savedLang = localStorage.getItem('language') || 'pt';
if (savedLang === 'en') {
    switchLanguage('en');
    langText.textContent = 'PT';
}

// Alternar idioma
langToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;

    if (currentLang === 'pt-BR') {
        switchLanguage('en');
        langText.textContent = 'PT';
        localStorage.setItem('language', 'en');
    } else {
        switchLanguage('pt');
        langText.textContent = 'EN';
        localStorage.setItem('language', 'pt');
    }
});

// Função para trocar idioma
function switchLanguage(lang) {
    if (lang === 'en') {
        document.documentElement.lang = 'en';
        document.title = 'Kalyla Pinheiro | Academic Portfolio';

        // Trocar todos os elementos com data-pt e data-en
        document.querySelectorAll('[data-pt][data-en]').forEach(element => {
            element.textContent = element.getAttribute('data-en');
        });
    } else {
        document.documentElement.lang = 'pt-BR';
        document.title = 'Kalyla Pinheiro | Portfólio Acadêmico';

        // Trocar todos os elementos com data-pt e data-en
        document.querySelectorAll('[data-pt][data-en]').forEach(element => {
            element.textContent = element.getAttribute('data-pt');
        });
    }
}
