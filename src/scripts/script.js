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
    const h2 = document.querySelector('.carrousel h2');
    if (hr) hr.style.background = 'var(--fcb-gold)';
    if (h2) h2.style.color = 'var(--fcb-gold)';

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
    const h2 = document.querySelector('.carrousel h2');
    if (hr) hr.style.background = 'var(--accent-ui-away)';
    if (h2) h2.style.color = 'var(--accent-ui-away)';

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
    const h2 = document.querySelector('.carrousel h2');
    if (hr) hr.style.background = 'var(--fcb-numbers-third)';
    if (h2) h2.style.color = 'var(--fcb-numbers-third)';

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