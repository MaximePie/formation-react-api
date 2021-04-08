import './App.css';
import * as React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'A',
      isAgeDisplayed: false,
      nombreTocs: 0,
    };

    this.changerNom = this.changerNom.bind(this);
    this.modifierAffichageAge = this.modifierAffichageAge.bind(this);
    this.knock = this.knock.bind(this);
  }

  render() {

    let age = "Age : 21";
    if (this.state.isAgeDisplayed === false) {
      age = '';
    }

    let message = null;
    if (this.state.nombreTocs >= 5) {
      message = <p>C'est bon j'arrive !</p>
    }

    if (this.state.nombreTocs >= 10) {
      message = <p>C'est bon j'arrive ! Oh la la quel caractère</p>
    }

    return (
      <div className="App">
        {message}
        <p>
          Bonjour {this.state.name}
        </p>
        <p>{age}</p>
        <p>Vous avez tapé {this.state.nombreTocs}</p>
        <button onClick={this.changerNom}>Changer</button>
        <button onClick={this.modifierAffichageAge}>Display Age</button>
        <button onClick={this.knock}>Taper à la porte</button>
      </div>
    );
  }

  knock() {
    this.setState({
      nombreTocs: this.state.nombreTocs + 1,
    })
  }

  /**
   * Modifier le state de manière à ce que isAgeDisplayed soit réglé sur true
   */
  modifierAffichageAge() {
    if (this.state.isAgeDisplayed === false) {
      this.setState({
        isAgeDisplayed: true,
      })
    }
    else {
      this.setState({
        isAgeDisplayed: false,
      })
    }
  }

  /**
   * Modifier le state de name en lui attribuant une nouvelle valeur
   */
  changerNom() {
    // Mauvaise pratique
    // this.state = {
    //
    // }
    if (this.state.name === 'B') {
      this.setState({
        name: "A"
      })
    }
    else {
      this.setState({
        name: "B",
      })
    }
  }
}

export default App;
