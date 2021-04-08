import React from 'react';

export default function Consignes() {
  return (
    <div className="Exercice">
      <h2>Créez un thermostat avec des states et des props</h2>
      <div className="Consignes">
        <p>Créer un composant <code>Thermostat</code>, qui va contenir un <code>Cadran</code> et des boutons</p>
        <p>Il faut un bouton qui permette d'augmenter le thermostat de <code>1</code></p>
        <p>Il faut un bouton qui permette de diminuer le thermostat de <code>1</code></p>
        <p>Un bouton qui permette de remettre le thermostat à <code>0</code></p>
        <p><code>Cadran</code> est un composant qui prend en <code>props</code> la <code>temperature</code> actuelle et qui l'affiche.</p>
        <p>S'il fait plus de <code>10 degrés</code>, le cadran affiche la température, suivie de <code>"Trop chaud !"</code></p>
        <p>S'il fait moins de <code>-10 degrés</code>, le cadran affiche la température, suivie de <code>"Trop froid !"</code></p>
        <p>S'il fait entre <code>10</code> et <code>-10</code> degrés, afficher la température</p>
      </div>
    </div>
  );
}
