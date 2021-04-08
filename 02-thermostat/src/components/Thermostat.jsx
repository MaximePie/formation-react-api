import React from 'react';
import Cadran from "./Cadran";

// Plugin React Developper Tools

/**
 * La constante est un petit bonus
 */
const initialState = {
  temperature: 5,
  message: '',
}

export default class Thermostat extends React.Component {
  constructor() {
    super();
    // Créer un state temperature ici.
    this.state = initialState;

    this.incrementTemperature = this.incrementTemperature.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <Cadran message={this.state.message} currentTemperature={this.state.temperature}/>
          <button onClick={this.incrementTemperature}>+</button>
          <button onClick={this.decrementTemperature}>-</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }

  incrementTemperature() {

    // Conditions ternaires Javascript
    let message = '';
    if (this.state.temperature >= 9) {
      message = 'Trop chaud';
    }

    /**
     * this.setState pour ajouter 1 au state de la temperature
     * Ne pas oublier de binder incrementTemperature à notre classe
     */
    this.setState({
      temperature: this.state.temperature + 1,
      message: message,
    })
  }

  /**
   * Modifier le state temperature de manière à le réduire de 1
   *
   * On utilise la notation de fonction fléchée pour éviter d'avoir à binder dans le constructeur
   */
  decrementTemperature = () => {

    // Conditions ternaires Javascript
    let message = '';
    if (this.state.temperature <= -9) {
      message = 'Trop froid';
    }

    this.setState({
      temperature: this.state.temperature - 1,
      message, // Equivalent à message: message
    })
  }

  /**
   * Remettre le state à son état initial
   */
  reset = () => {
    this.setState(initialState)
  }
}
