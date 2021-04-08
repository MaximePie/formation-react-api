// Chargement des dépendances (librairie React ici)
import React from 'react';


// Composant React de type fonction.
export function Message() {

    let firstName = 'Johanna';

    return (
        <p>Il est possible d'utiliser des variables JavaScript comme ceci : <strong>{ firstName }</strong></p>
    );
}