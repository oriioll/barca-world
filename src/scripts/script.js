// Create functions to change color theme (kept in the simpler, explicit style so it's easy to follow)
function setColorsToFcb() {
    const body = document.getElementById('body');
    if (body) {
        body.style.color = '#F4F6F8';
        body.style.background = 'linear-gradient(90deg,var(--fcb-navy) 0%,var(--fcb-garnet) 100%)';
    }

    const header = document.querySelector('header');
    if (header) header.style.color = 'var(--fcb-numbers)';

    const navLinks = document.querySelectorAll('header a');
    navLinks.forEach((link) => {
        link.style.color = 'var(--text-light)';
        // use onmouseover / onmouseout so re-applying the theme won't add duplicate listeners
        link.onmouseover = () => link.style.color = 'var(--fcb-numbers)';
        link.onmouseout = () => link.style.color = 'var(--text-light)';
    });

    const footerLink = document.querySelector('footer a');
    if (footerLink) {
        footerLink.style.color = 'var(--text-light)';
        footerLink.onmouseover = () => footerLink.style.color = 'var(--fcb-numbers)';
        footerLink.onmouseout = () => footerLink.style.color = 'var(--text-light)';
    }

    // hr and main title styling
    const hr = document.querySelector('.carrousel hr');
    const hrr = document.querySelector('.field hr');
    const h2 = document.querySelector('.carrousel h2');
    const h22 = document.querySelector('.field h2');
    if (hr) hr.style.background = 'var(--fcb-gold)';

    // SVG field stroke color (set both group and svg to keep it consistent)
    const fieldSvgGroup = document.querySelector('#fieldSvg g');
    const fieldSvg = document.getElementById('fieldSvg');
    if (fieldSvgGroup) fieldSvgGroup.style.stroke = 'var(--fcb-numbers)';
    if (fieldSvg) fieldSvg.style.stroke = 'var(--fcb-numbers)';
    if (h2) h2.style.color = 'var(--fcb-gold)';
    if (hrr) hrr.style.background = 'var(--fcb-gold)';
    if (h22) h22.style.color = 'var(--fcb-gold)';
    // already set above to numbers color


    // headings (section titles)
    const h3 = document.querySelectorAll('.carrousel h3');
    h3.forEach(h => {
        h.style.color = 'var(--text-light)';
        h.onmouseover = () => h.style.color = 'var(--fcb-numbers)';
        h.onmouseout = () => h.style.color = 'var(--text-light)';
    });

    // keep nav list items (li) looking consistent — the stylesheet will handle the transform on hover
    const navItems = document.querySelectorAll('header li');
    navItems.forEach(li => li.style.color = 'var(--text-light)');

    // Ensure the whole section hover also updates the heading color (because inline styles block CSS :hover color inheritance)
    const sections = document.querySelectorAll('.goalkeepers, .defenders, .midfielders, .forwards');
    sections.forEach(sec => {
        sec.onmouseover = () => {
            const title = sec.querySelector('h3');
            if (title) title.style.color = 'var(--fcb-numbers)';
        };
        sec.onmouseout = () => {
            const title = sec.querySelector('h3');
            if (title) title.style.color = 'var(--text-light)';
        };
    });

    handlePlayerInfoDisplay(
        'var(--fcb-numbers)',                  // Color para el nombre
        'var(--fcb-numbers)',       // Color para el número (Home Kit)
        'var(--font-numbers)'       // Fuente para el número
    );
}

function setColorsToKobe() {
    const body = document.getElementById('body');
    if (body) {
        body.style.color = 'var(--text-dark-away)';
        body.style.background = 'var(--bg-light-away)';
    }

    const header = document.querySelector('header');
    if (header) header.style.color = 'var(--accent-ui-away)';

    const navLinks = document.querySelectorAll('header a');
    navLinks.forEach((link) => {
        link.style.color = 'var(--text-dark-away)';
        link.onmouseover = () => link.style.color = 'var(--accent-ui-away)';
        link.onmouseout = () => link.style.color = 'var(--text-dark-away)';
    });

    const footerLink = document.querySelector('footer a');
    if (footerLink) {
        footerLink.style.color = 'var(--text-dark-away)';
        footerLink.onmouseover = () => footerLink.style.color = 'var(--accent-ui-away)';
        footerLink.onmouseout = () => footerLink.style.color = 'var(--text-dark-away)';
    }

    const hr = document.querySelector('.carrousel hr');
    const hrr = document.querySelector('.field hr');
    const h2 = document.querySelector('.carrousel h2');
    const h22 = document.querySelector('.field h2');
    if (hr) hr.style.background = 'var(--accent-ui-away)';

    // SVG field stroke color for Kobe theme (set both group and svg)
    const fieldSvgGroup = document.querySelector('#fieldSvg g');
    const fieldSvg = document.getElementById('fieldSvg');
    if (fieldSvgGroup) fieldSvgGroup.style.stroke = 'var(--accent-ui-away)';
    if (fieldSvg) fieldSvg.style.stroke = 'var(--accent-ui-away)';
    if (hrr) hrr.style.background = 'var(--accent-ui-away)';
    if (h2) h2.style.color = 'var(--accent-ui-away)';
    if (h22) h22.style.color = 'var(--accent-ui-away)';
    // (already set above to the correct numbers color)

    const h3 = document.querySelectorAll('.carrousel h3');
    h3.forEach(h => {
        h.style.color = 'var(--text-dark-away)';
        h.onmouseover = () => h.style.color = 'var(--accent-ui-away)';
        h.onmouseout = () => h.style.color = 'var(--text-dark-away)';
    });

    const navItems = document.querySelectorAll('header li');
    navItems.forEach(li => li.style.color = 'var(--text-dark-away)');

    // section hover behaviour for kobe
    const sections = document.querySelectorAll('.goalkeepers, .defenders, .midfielders, .forwards');
    sections.forEach(sec => {
        sec.onmouseover = () => {
            const title = sec.querySelector('h3');
            if (title) title.style.color = 'var(--accent-ui-away)';
        };
        sec.onmouseout = () => {
            const title = sec.querySelector('h3');
            if (title) title.style.color = 'var(--text-dark-away)';
        };
    });

    handlePlayerInfoDisplay(
        'var(--fcb-numbers-away)',    // Color para el nombre
        'var(--fcb-numbers-away)',    // Color para el número (Kobe)
        'var(--font-numbers)'
    );
}

function setColorsToTotal90() {
    const body = document.getElementById('body');
    if (body) {
        body.style.color = 'var(--text-dark-third)';
        body.style.background = 'var(--bg-third)';
    }

    const header = document.querySelector('header');
    if (header) header.style.color = 'var(--fcb-numbers-third)';

    const navLinks = document.querySelectorAll('header a');
    navLinks.forEach((link) => {
        link.style.color = 'var(--text-dark-third)';
        link.onmouseover = () => link.style.color = 'var(--fcb-numbers-third)';
        link.onmouseout = () => link.style.color = 'var(--text-dark-third)';
    });

    const footerLink = document.querySelector('footer a');
    if (footerLink) {
        footerLink.style.color = 'var(--text-dark-third)';
        footerLink.onmouseover = () => footerLink.style.color = 'var(--fcb-numbers-third)';
        footerLink.onmouseout = () => footerLink.style.color = 'var(--text-dark-third)';
    }

    const hr = document.querySelector('.carrousel hr');
    const hrr = document.querySelector('.field hr');
    const h2 = document.querySelector('.carrousel h2');
    const h22 = document.querySelector('.field h2');
    if (hr) hr.style.background = 'var(--fcb-numbers-third)';

    // SVG field stroke color for Total90 theme (set both group and svg)
    const fieldSvgGroup = document.querySelector('#fieldSvg g');
    const fieldSvg = document.getElementById('fieldSvg');
    if (fieldSvgGroup) fieldSvgGroup.style.stroke = 'var(--fcb-numbers-third)';
    // stroke already set above to numbers color
    if (hrr) hrr.style.background = 'var(--fcb-numbers-third)';
    if (h2) h2.style.color = 'var(--fcb-numbers-third)';
    if (h22) h22.style.color = 'var(--fcb-numbers-third)';
    if (fieldSvg) fieldSvg.style.stroke = 'var(--fcb-numbers-third)';

    const h3 = document.querySelectorAll('.carrousel h3');
    h3.forEach(h => {
        h.style.color = 'var(--text-light)';
        h.onmouseover = () => h.style.color = 'var(--fcb-numbers-third)';
        h.onmouseout = () => h.style.color = 'var(--text-dark-third)';
    });

    const navItems = document.querySelectorAll('header li');
    navItems.forEach(li => li.style.color = 'var(--text-dark-third)');

    // section hover behaviour for total90
    const sections = document.querySelectorAll('.goalkeepers, .defenders, .midfielders, .forwards');
    sections.forEach(sec => {
        sec.onmouseover = () => {
            const title = sec.querySelector('h3');
            if (title) title.style.color = 'var(--fcb-numbers-third)';
        };
        sec.onmouseout = () => {
            const title = sec.querySelector('h3');
            if (title) title.style.color = 'var(--text-dark-third)';
        };
    });

    handlePlayerInfoDisplay(
        'var(--fcb-numbers-third)',    // Color para el nombre
        'var(--fcb-numbers-third)',    // Color para el número (Kobe)
        'var(--font-numbers)'
    );
}

//Get all icons id
const fcbButton = document.getElementById('fcb');
const kobeButton = document.getElementById('kobe');
const total90Button = document.getElementById('total90');

//Hook clicks to the old-style theme functions (keeps structure easy to read)
if (fcbButton) {
  fcbButton.addEventListener('click', () => setColorsToFcb());
}

if (kobeButton) {
  kobeButton.addEventListener('click', () => setColorsToKobe());
}

if (total90Button) {
  total90Button.addEventListener('click', () => setColorsToTotal90());
}


function handlePlayerInfoDisplay(nameTextColor, numberColor, numberFont) {
    const playerImages = document.querySelectorAll(
        '.goalkeepersCarrousel img, .defendersCarrousel img, .midfieldersCarrousel img, .forwardsCarrousel img'
    );

    // Aplicar estilos globales
    document.querySelectorAll('.player-name-display').forEach(el => {
        el.style.color = nameTextColor;
    });
    document.querySelectorAll('.player-number-display').forEach(el => {
        el.style.color = numberColor;
        el.style.fontFamily = numberFont;
    });

    playerImages.forEach(img => {
        img.addEventListener("mouseover", function() {
            const section = this.closest('section'); 
            const infoContainer = section.querySelector('.player-info-display');
            if (!infoContainer) return;

            const nameDisplay = infoContainer.querySelector('.player-name-display');
            const numberDisplay = infoContainer.querySelector('.player-number-display');

            // Insertar texto dinámico
            nameDisplay.textContent = this.alt;  
            numberDisplay.textContent = this.dataset.number;

            // Aplicar Circletype al nombre (curvado/wavy)
            const arco = new CircleType(nameDisplay);
            arco.radius(400); // ajusta el radio del arco

            infoContainer.classList.add('active');
        });

        img.addEventListener("mouseout", function() {
            const section = this.closest('section');
            const infoContainer = section.querySelector('.player-info-display');
            if (!infoContainer) return;

            const nameDisplay = infoContainer.querySelector('.player-name-display');
            const numberDisplay = infoContainer.querySelector('.player-number-display');

            // Limpiar texto
            nameDisplay.textContent = '';
            numberDisplay.textContent = '';

            infoContainer.classList.remove('active');
        });
    });
}



document.addEventListener('DOMContentLoaded', () => {
    setColorsToFcb(); 
});

const players = {
    goalkeeper: "Joan Garcia",
    defenders: ["Koundé", "Cubarsí", "Eric García", "Balde"],
    midfielders: ["De Jong", "Pedri", "Olmo"],
    forwards: ["Lamine Yamal", "Ferran Torres", "Marcus Rashford"]
};