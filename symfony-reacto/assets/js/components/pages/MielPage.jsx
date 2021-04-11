import React from 'react';

export default class MielPage extends React.Component {

  constructor() {
    super();
    this.state = {
      miels: [],
      searchValue: '',
    }
  }

  /**
   * https://fr.reactjs.org/docs/state-and-lifecycle.html
   * Cette méthode se déclenche à chaque fois qu'on fait un setState
   * @param prevProps
   * @param prevState
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.fetchMiels();
    }
  }

  // componentDidMount() {
  //   this.fetchMiels();
  // }
  //
  // componentWillUnmount() {
  //
  // }

  render() {
    return (
      <div>
        <h3>En train de rechercher : {this.state.searchValue}</h3>
        <input type="text" value={this.state.searchValue} onChange={this.updateSearch}/>
        {this.state.miels.map(function (miel) {
          return (
            <p>
              {miel}
            </p>
          )
        })}
        <button onClick={this.fetchMiels}>Fetch Miel</button>
      </div>
    )
  }

  /**
   * Cette fonction met à jour le state search avec la valeur reçue en paramètres
   * @param event
   */
  updateSearch = (event) => {
    this.setState({
      searchValue: event.target.value,
    })
  };

  fetchMiels = () => {
    fetch(
      'http://localhost:8000/api/miel',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          search: this.state.searchValue,
        })
      }
    ).then(response => response.json()).then(response => {
      let updatedMielsList = response.data;
      // {
      // 7: "Miel des ours",
      // 9: "Coco veut du gâteau",
      // 10: "Papy en met dans son thé et on adore"
      // }
      // console.log(updatedMielsList);
      updatedMielsList = Object.entries(updatedMielsList).map(object => {
        // console.log('-------------');
        // console.log(object);
        // console.log(object[0]);
        // console.log(object[1]);
        return object[1]
      });
      this.setState({
        miels: updatedMielsList,
      })
    })
  }
}
