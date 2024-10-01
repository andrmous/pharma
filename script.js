// Sélectionne le footer et la zone de déclenchement
const footer = document.querySelector('footer');
const footerTrigger = document.querySelector('.footer-trigger');

// Écoute l'événement de survol sur la zone de déclenchement pour afficher le footer
footerTrigger.addEventListener('mouseenter', () => {
    footer.classList.add('show');
});

// Écoute l'événement de sortie de la souris pour masquer le footer
footer.addEventListener('mouseleave', () => {
    footer.classList.remove('show');
});