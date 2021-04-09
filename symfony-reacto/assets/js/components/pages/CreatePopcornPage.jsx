import React from 'react';

export default class CreatePopcornPage extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      taste: '',
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="">
          Nom
          <input type="text" value={this.state.name} onChange={this.updateName}/>
        </label>
        <label htmlFor="">
          Goût
          <input type="text" value={this.state.taste} onChange={this.updateTaste}/>
        </label>
        <button onClick={this.submitData}>Sauvegarder</button>
      </div>
    )
  }

  submitData = () => {
    fetch('http://localhost:8000/api/popcorn/create',
      {
        headers: { // Garder toujours les mêmes headers
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          name: this.state.name,
          taste: this.state.taste,
        })
      }
    )
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value,
    })
  };

  updateTaste = (event) => {
    this.setState({
      taste: event.target.value,
    })
  }
}
