import React from 'react';

export default class CreateMielPage extends React.Component {

  constructor() {
    super();
    this.state = { // Ce sont les deux champs dont on a besoin dans notre formulaire
      name: '',
      price: '',
    }
  }

  render() {
    return (
      <div>
        <form>
          <input name='name' type="text" value={this.state.name} onChange={this.updateName}/>
          <input name='price' type="text" value={this.state.price} onChange={this.updatePrice}/>
          <button onClick={this.submitForm}>Envoyer</button>
        </form>
      </div>
    )
  }

  /**
   * Envoie les données au back-office avec la méthode POST en se basant sur les valeurs qui sont dans le state
   */
  submitForm() {
    fetch('localhost:8000/api/miel/create',
      { // Ceci est un objet qui permet de renseigner tous les détails de la requête
        headers: { // Garder toujours les mêmes headers
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST", // POST, PUT, ou DELETE en fonction des besoins
        body: JSON.stringify({
          // Cet objet contient tous nos paramètres
          name: this.state.name,
          price: this.state.price,
        })
      }
    )
  }

  /**
   * Met à jour le state de name avec setState en lui attribuant la value reçue en paramètre.
   * Cette méthode est déclenchée à chaque fois qu'on écrit dans le champ 'name'
   */
  updateName(event) {
    this.setState({
      name: event.target.value
    })
  }

  /**
   * Met à jour le state de price avec setState en lui attribuant la value reçue en paramètre.
   * Cette méthode est déclenchée à chaque fois qu'on écrit dans le champ 'price'
   */
  updatePrice(event) {
    this.setState({
      price: event.target.value
    })
  }
}
