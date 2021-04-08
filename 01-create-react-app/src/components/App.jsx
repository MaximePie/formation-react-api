// Chargement des dépendances (librairie React ici)
import React from 'react';

// Chargement du composant React représentant un message texte
import { Message } from './Message';


// Composant React de type classe.
export class App extends React.Component {

    render() {

        return (
            <section>
                <h2>Ceci est construit avec React en écrivant du JSX</h2>
                <Message />
                <p>Autre paragraphe de texte après le composant Message</p>
                {/* Ceci est un commentaire JSX. Les accolades rappellent les templates Twig avec Symfony */}
            </section>
            /*
             * Il n'est pas possible d'avoir plusieurs balises JSX frères/soeurs : 
             * il faut toujours un parent, ici par exemple une <section>
             */
        );
    }
}