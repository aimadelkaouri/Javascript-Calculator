// Récupération de l'élément d'affichage
const input = document.getElementById('input');

// Ajout d'un gestionnaire d'événement pour les boutons numériques et d'opérateurs
document.querySelectorAll('.numbers, .sign').forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.textContent;
    });
});

// Gestionnaire d'événement pour le bouton "="
document.querySelector('.equals').addEventListener('click', () => {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Erreur';
    }
});

// Gestionnaire d'événement pour le bouton "C" (effacer)
document.querySelector('.clear').addEventListener('click', () => {
    input.value = '0';
});

// Gestionnaire d'événement pour le bouton "+/-" (changement de signe)
document.querySelector('.negative').addEventListener('click', () => {
    if (input.value !== '0' && input.value !== 'Erreur') {
        if (input.value.charAt(0) === '-') {
            input.value = input.value.slice(1);
        } else {
            input.value = '-' + input.value;
        }
    }
});

// Gestionnaire d'événement pour le bouton "%" (pourcentage)
document.querySelector('.persent').addEventListener('click', () => {
    if (input.value !== '0' && input.value !== 'Erreur') {
        input.value = eval(input.value) / 100;
    }
});

// Gestionnaire d'événement pour le bouton "," (virgule décimale)
document.querySelector('.comma').addEventListener('click', () => {
    if (input.value !== '0' && input.value !== 'Erreur' && !input.value.includes('.')) {
        input.value += '.';
    }
});
